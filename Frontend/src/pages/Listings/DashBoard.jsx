import axios from "axios";
import { ListingCard } from "../../components/ListingCard";
import { BASE_URL } from "../../utils/constants";
import { useState } from "react";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const handleListingData = async () => {
    try {
      const response = await axios.get(BASE_URL + "/list/yourlistings", {
        withCredentials: true,
      });
      console.log(response);
      setData(response?.data?.message);
      console.log(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

//   if(data) return;
//   if(data && data.length == 0) return <div> NO DATA FOUND!</div>
  return (
    <div>
      {data.map((obj) => (
        <ListingCard key={obj._id} data={obj} />
      ))}
      <button onClick={handleListingData}>click</button>
    </div>
  );
};

export default DashBoard;
