import { IoIosRemoveCircle } from "react-icons/io";
import { RiEdit2Line } from "react-icons/ri";
import { Map } from "../components/Map.jsx";

export const ListingCard = (props) => {
  const { _id, owner, title, description, imageUrl, map, rating } = props.data;
  let markerLat, markerLon;

  if (map) {
    if (map.lat && map.lon) {
      markerLat = map.lat;
      markerLon = map.lon;
    }
  }

  return (
    <div className="flex items-center justify-center gap-5 border-2 border-[#005c7a] rounded-xl p-4 w-[80%]">
      <div className="flex flex-col justify-start gap-3 text-xl font-semibold flex-1">
        <p>
          <span className="italic">Title : </span>
          {title}
        </p>
        <p>
          {" "}
          <span className="italic">Description :</span> {description}
        </p>
        {owner.firstName && owner.lastName && (
          <p>
            <span className="italic">Listed By:</span>{" "}
            {owner?.firstName.charAt(0).toUpperCase() +
              owner?.firstName.slice(1).toLowerCase() +
              " " +
              owner?.lastName.charAt(0).toUpperCase() +
              owner?.lastName.slice(1).toLowerCase()}{" "}
          </p>
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
          <button className="border-2 p-2  border-black hover:text-green-500 hover:border-green-500 rounded-xl flex items-center justify-center gap-3">
            <span>
              <RiEdit2Line />
            </span>
            Edit
          </button>
          <button className="border-2 p-2 border-black hover:text-red-500 hover:border-red-500 rounded-xl flex items-center justify-center gap-3">
            <span>
              <IoIosRemoveCircle size={25} />
            </span>
            Delete
          </button>
        </div>
      </div>
      <div className="">
        {imageUrl.map((image) => (
          <div key={image} className="w-56  h-56">
            <img src={image} className="w-full h-full rounded-xl" />
          </div>
        ))}
      </div>
      <div className="w-56 h-56">
        <Map _id={_id} markerLat={markerLat} markerLon={markerLon} />
      </div>
      <div className="flex flex-col items-center justify-center text-2xl gap-3"></div>
    </div>
  );
};
