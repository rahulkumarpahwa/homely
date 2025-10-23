import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { BASE_URL } from "../../utils/constants";
import { useReducer } from "react";
import { reducer } from "../../utils/reducers/authReducer";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const [state, dispatcher] = useReducer(reducer, user);

  const setFirstName = (firstName) => {
    dispatcher({ type: "SET_FIRSTNAME", payload: firstName });
  };

  const setLastName = (lastName) => {
    dispatcher({ type: "SET_LASTNAME", payload: lastName });
  };

  const setAddress = (address) => {
    dispatcher({ type: "SET_ADDRESS", payload: address });
  };

  const handleUserUpdate = async () => {
    try {
      const response = await axios.patch(
        BASE_URL + "/profile/edit",
        { ...state },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center gap-5 pt-8 pb-16">
      <h1 className="text-5xl font-bold text-[#004156]">Edit Profile</h1>
      <div className="grid grid-cols-2 border-4 text-[#004156] font-semibold border-[#004156] p-2 rounded-xl">
        <div className="border-2 border-[#004156] m-1 p-1">First Name</div>
        <input
          type="text"
          className="border border-[#004156] m-1 p-1"
          value={
            state.firstName.charAt(0).toUpperCase() + state.firstName.slice(1)
          }
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <div className="border-2 border-[#004156] m-1 p-1">Last Name</div>
        <input
          type="text"
          className="border border-[#004156] m-1 p-1"
          value={
            state.lastName.charAt(0).toUpperCase() + state.lastName.slice(1)
          }
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <div className="border-2 border-[#004156] m-1 p-1">Address</div>
        <input
          type="text"
          className="border border-[#004156] m-1 p-1"
          value={state.address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleUserUpdate}
          className="border px-8 py-2 rounded text-white bg-[#005c7a]"
        >
          Update
        </button>
        <Link
          to="/profile"
          className="border px-8 py-2 rounded text-white bg-[#005c7a]"
        >
          Back to Profile
        </Link>
      </div>
    </div>
  );
};
export default EditProfile;
