import { useReducer } from "react";
import { initialState, reducer } from "../../utils/createListingReducer";

const CreateListing = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);

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

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-5xl mb-8">Create Your New Listing</h1>

      <p>
        {state.title} {state.description} {state.imageUrl} {state.street}{" "}
        {state.location.state}
        {state.location.city}
      </p>

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
            onChange={(e) => setImageUrl(e.target.value)}
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

        <div className="flex items-center justify-center gap-5 mt-4">
          <button className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
            Create Map
          </button>
          <button className="bg-black text-white px-6 py-2 rounded font-medium  hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105">
            Create Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
