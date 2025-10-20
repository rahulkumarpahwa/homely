import axios from "axios";
import { BASE_URL } from "./constants";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addMap } from "./mapSlice";

const useMaps = () => {
  const dispatcher = useDispatch();
  const handleGetMaps = async (street, location) => {
    try {
      const { city, state, country, postalcode } = location;
      if (street && city && state && country && postalcode) {
        const response = await axios.post(
          BASE_URL + "/list/getcoordinates",
          { street, city, state, country, postalcode },
          { withCredentials: true }
        );
        const { lat, lon } = response.data;
        dispatcher(addMap({ lat, lon }));
        console.log(response?.data);
      } else {
        toast.error("Street & Location values must be filled!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return handleGetMaps;
};

export default useMaps;
