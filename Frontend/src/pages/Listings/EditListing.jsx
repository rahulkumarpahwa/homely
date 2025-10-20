import { useReducer } from "react";
import { useSelector } from "react-redux";
import { reducer } from "../../utils/editListingReducer";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Map } from "../../components/Map";
import useMaps from "../../utils/useMaps";

const EditListing = () => {
  // taking the listing id from the query params:
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const listingId = queryParams.get("id");

  const listingStore = useSelector((store) => store.listing);
  const initialState = listingStore.filter((list) => list._id === listingId)[0];
  console.log(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleGetMaps = useMaps();
  

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-5xl mb-8">Update Your Listing</h1>

      <div className="border-2 p-8 rounded-xl flex items-center flex-col justify-center">
        <div className="flex flex-col items-start w-80 py-1 ">
          <label htmlFor="title" className="text-sm font-medium mb-1 ml-1">
            Title
          </label>
          <input
            type="text"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "NEW_TITLE", payload: e.target.value })
            }
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
            onChange={(e) =>
              dispatch({ type: "NEW_DESCRIPTION", payload: e.target.value })
            }
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
              dispatch({ type: "NEW_IMAGEURL", payload: arr });
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
            onChange={(e) =>
              dispatch({ type: "NEW_STREET", payload: e.target.value })
            }
            className="border border-black w-full rounded-sm px-2 py-1"
            placeholder="Enter Street"
          />
        </div>
        <div className="flex flex-col items-start w-80 py-1">
          <p htmlFor="Location" className="text-sm font-medium mb-1 ml-1">
            Location
          </p>

          <Map markerLat={state.map.lat} markerLon={state.map.lon} />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p htmlFor="Location" className="text-sm font-medium mb-1 ml-1">
                City
              </p>
              <input
                value={state.location.city}
                onChange={(e) =>
                  dispatch({
                    type: "NEW_LOCATION",
                    payload: { ...state.location, city: e.target.value },
                  })
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
                  dispatch({
                    type: "NEW_LOCATION",
                    payload: { ...state.location, state: e.target.value },
                  })
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
                  dispatch({
                    type: "NEW_LOCATION",
                    payload: { ...state.location, country: e.target.value },
                  })
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
                  dispatch({
                    type: "NEW_LOCATION",
                    payload: { ...state.location, postalcode: e.target.value },
                  })
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
            onClick={() => handleGetMaps(state.street, state.location)}
          >
            Create Map
          </button>
          <button className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
            Update Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
