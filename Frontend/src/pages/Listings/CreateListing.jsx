import { useReducer } from "react";
import {
  initialState,
  reducer,
} from "../../utils/reducers/createListingReducer";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import toast, { Toaster } from "react-hot-toast";
import { Map } from "../../components/Map";
import { useDispatch, useSelector } from "react-redux";
import { addMap } from "../../utils/reduxStore/mapSlice";
import { useNavigate } from "react-router";

const CreateListing = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);
  const listingStore = useSelector((store) => store.listing);
  const storedispatcher = useDispatch();
  const navigate = useNavigate();

  const setTitle = (title) => {
    dispatcher({ type: "SET_TITLE", payload: title });
  };

  const setDescription = (description) => {
    dispatcher({ type: "SET_DESCRIPTION", payload: description });
  };

  const setStreet = (street) => {
    dispatcher({ type: "SET_STREET", payload: street });
  };

  const setImageUrl = (imageUrl) => {
    dispatcher({ type: "SET_IMAGEURL", payload: imageUrl });
  };
  const setLocation = (location) => {
    dispatcher({ type: "SET_LOCATION", payload: location });
  };

  const { city, country, postalcode } = state.location;

  const handleGetMaps = async () => {
    try {
      if (
        state.street &&
        city &&
        state.location.state &&
        country &&
        postalcode
      ) {
        const response = await axios.post(
          BASE_URL + "/list/getcoordinates",
          { street: state.street, ...state.location },
          { withCredentials: true }
        );
        const { lat, lon } = response.data;
        storedispatcher(addMap({ lat, lon }));
        console.log(response?.data);
      } else {
        toast.error("Street & Location values must be filled!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendListing = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/list/create",
        { ...state, map: listingStore.map },
        { withCredentials: true }
      );
      console.log(response?.data?.message);
      toast.success("Your Listing has been added!");
      return navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.message || error.message + "!");
      console.log(error?.response?.message || error.message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-5xl mb-8">Create Your New Listing</h1>

      <div className="border-2 p-8 rounded-xl flex items-center flex-col justify-center">
        <div className="flex flex-col items-start w-80 py-1 ">
          <label htmlFor="title" className="text-sm font-medium mb-1 ml-1">
            Title
          </label>
          <input
            type="text"
            value={state.title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-black w-full rounded-sm px-2 py-1"
            placeholder="Enter Title"
          />
        </div>
        <div className="flex flex-col items-start w-80 py-1">
          <label
            htmlFor="description"
            className="text-sm font-medium mb-1 ml-1"
          >
            Description
          </label>
          <input
            type="text"
            value={state.description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-black w-full rounded-sm px-2 py-1"
            placeholder="Enter Description"
          />
        </div>
        <div className="flex flex-col items-start w-80 py-1">
          <label htmlFor="imageurl" className="text-sm font-medium mb-1 ml-1">
            Image URLs
          </label>
          <input
            type="text"
            value={state.imageUrl}
            onChange={(e) => {
              const arr = e.target.value.split(",").map((item) => item.trim());
              setImageUrl(arr);
            }}
            className="border border-black w-full rounded-sm px-2 py-1"
            placeholder="Enter ImageURLs"
          />
        </div>
        <div className="flex flex-col items-start w-80 py-1">
          <label htmlFor="street" className="text-sm font-medium mb-1 ml-1">
            Street
          </label>
          <input
            type="text"
            value={state.street}
            onChange={(e) => setStreet(e.target.value)}
            className="border border-black w-full rounded-sm px-2 py-1"
            placeholder="Enter Street"
          />
        </div>
        <div className="flex flex-col items-start w-80 py-1">
          <p htmlFor="Location" className="text-sm font-medium mb-1 ml-1">
            Location
          </p>

          {listingStore && listingStore?.map?.lat && listingStore?.map?.lon && (
            <Map
              markerLat={listingStore.map.lat}
              markerLon={listingStore.map.lon}
            />
          )}

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p htmlFor="Location" className="text-sm font-medium mb-1 ml-1">
                City
              </p>
              <input
                value={state.location.city}
                onChange={(e) =>
                  setLocation({ ...state.location, city: e.target.value })
                }
                type="text"
                className="border border-black w-full rounded-sm px-2 py-1"
                placeholder="Enter City"
              />
            </div>
            <div>
              <p htmlFor="State" className="text-sm font-medium mb-1 ml-1">
                State
              </p>
              <input
                value={state.location.state}
                onChange={(e) =>
                  setLocation({ ...state.location, state: e.target.value })
                }
                type="text"
                className="border border-black w-full rounded-sm px-2 py-1"
                placeholder="Enter State"
              />
            </div>
            <div>
              <p htmlFor="Country" className="text-sm font-medium mb-1 ml-1">
                Country
              </p>
              <input
                value={state.location.country}
                onChange={(e) =>
                  setLocation({ ...state.location, country: e.target.value })
                }
                type="text"
                className="border border-black w-full rounded-sm px-2 py-1"
                placeholder="Enter Country"
              />
            </div>
            <div>
              <p
                htmlFor="Postal Code"
                className="text-sm font-medium mb-1 ml-1"
              >
                Postal Code
              </p>
              <input
                type="text"
                value={state.location.postalcode}
                onChange={(e) =>
                  setLocation({ ...state.location, postalcode: e.target.value })
                }
                className="border border-black w-full rounded-sm px-2 py-1"
                placeholder="Enter Postal Code"
              />
            </div>
          </div>
        </div>

        <Toaster />
        <div className="flex items-center justify-center gap-5 mt-4">
          <button
            className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105"
            onClick={handleGetMaps}
          >
            Create Map
          </button>
          <button
            className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105"
            onClick={handleSendListing}
          >
            Create Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
