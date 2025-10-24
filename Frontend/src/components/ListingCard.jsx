import { IoIosRemoveCircle } from "react-icons/io";
import { RiEdit2Line } from "react-icons/ri";
import { Map } from "../components/Map.jsx";
import { Link } from "react-router";
import axios from "axios";
import { BASE_URL } from ".././utils/constants.js";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeListing } from "../utils/reduxStore/listingSlice.js";
import { useNavigate } from "react-router";

export const ListingCard = (props) => {
  const { _id, owner, title, description, imageUrl, map, rating } = props.data;
  let markerLat, markerLon;

  if (map) {
    if (map.lat && map.lon) {
      markerLat = map.lat;
      markerLon = map.lon;
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteListing = async (listingId) => {
    try {
      const response = await axios.delete(
        BASE_URL + "/list/deletelisting/" + listingId,
        {
          withCredentials: true,
        }
      );
      dispatch(removeListing(_id));
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message || error?.response?.message);
    }
  };

  return (
    <div className="flex items-center justify-center gap-5 border-4 border-[#005c7a] rounded-xl p-4 w-full">
      <div className="flex flex-col justify-start gap-3 text-xl font-semibold w-1/2">
        <p>
          <span className="italic">Title : </span>
          {title}
        </p>
        <p>
          {" "}
          <span className="italic">Description :</span> {description}
        </p>
        {owner.firstName && owner.lastName && (
          <div className="flex gap-2">
            <span className="italic">Listed By:</span>
            <Link to="/profile" className="hover:underline underline-offset-4">
              {owner?.firstName.charAt(0).toUpperCase() +
                owner?.firstName.slice(1).toLowerCase() +
                " " +
                owner?.lastName.charAt(0).toUpperCase() +
                owner?.lastName.slice(1).toLowerCase()}{" "}
            </Link>
          </div>
        )}
        <div>
          {typeof rating === "number" && rating > 0 && (
            <div className="flex space-x-1">
              {Array.from({ length: Math.max(0, Math.min(5, rating)) }).map(
                (_, i) => (
                  <span key={i} className="text-[#005c7a] text-xl">
                    ★
                  </span>
                )
              )}
            </div>
          )}
        </div>
        <div className="flex space-x-5">
          <button
            className="border-2 p-2  border-black hover:text-green-500 hover:border-green-500 rounded-xl flex items-center justify-center gap-3"
            onClick={() => navigate(`/edit-listing?id=${_id}`)}
          >
            <span>
              <RiEdit2Line />
            </span>
            Edit
          </button>
          <button
            className="border-2 p-2 border-black hover:text-red-500 hover:border-red-500 rounded-xl flex items-center justify-center gap-3"
            onClick={() => handleDeleteListing(_id)}
          >
            <span>
              <IoIosRemoveCircle size={25} />
            </span>
            Delete
          </button>
        </div>
      </div>
      <div className="w-1/3">
        {imageUrl.map((image) => (
          <div key={image} className="w-56  h-56">
            <img src={image} className="w-full h-full rounded-xl" />
          </div>
        ))}
      </div>
      <div className="h-56 w-1/3">
        <Map _id={_id} markerLat={markerLat} markerLon={markerLon} />
      </div>
      <div className="flex flex-col items-center justify-center text-2xl gap-3"></div>
    </div>
  );
};
