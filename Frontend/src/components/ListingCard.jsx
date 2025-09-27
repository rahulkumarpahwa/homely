import { IoIosRemoveCircle } from "react-icons/io";
import { RiEdit2Line } from "react-icons/ri";
import { Map } from "../components/Map.jsx";

export const ListingCard = (props) => {
  const { _id, owner, title, description, imageUrl, map, rating } = props.data;
  let markerLat, markerLon;

  if (map) {
    if (map.lat && map.lon) {
      markerLat = map.lat || "30.73629";
      markerLon = map.lon || "76.7884";
    }
  }

  return (
    <div className="flex items-center justify-center space-x-3">
      <div className="flex flex-col items-center justify-center gap-3">
        <p>Title : {title}</p>
        <p>Description : {description}</p>
        <p>
          Listed By: {owner?.firstName + " " + owner?.lastName}{" "}
          <span>{rating}</span>
        </p>
      </div>
      <div>
        {imageUrl.map((image) => (
          <div key={image} className="w-40">
            <img src={image} className="w-full" />
          </div>
        ))}
      </div>
      <Map _id={_id} markerLat={markerLat} markerLon={markerLon} />
      <div className="flex flex-col items-center justify-center text-2xl gap-3">
        <button>
          <IoIosRemoveCircle />
        </button>
        <button>
          <RiEdit2Line />
        </button>
      </div>
    </div>
  );
};
