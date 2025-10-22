import axios from "axios";
import { BASE_URL } from "../constants";
import toast from "react-hot-toast";
import { addUser } from "../reduxStore/userSlice";

export const fetchUser = async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL + "/profile/view", {
      withCredentials: true,
    });
    dispatch(addUser(response?.data?.data));
    console.log(response);
  } catch (error) {
    console.log(error);
    toast.error("error : " + error);
  }
};
