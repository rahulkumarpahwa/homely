/* eslint-disable */
import axios from "axios";
import { ListingCard } from "../../components/ListingCard";
import { BASE_URL } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListing } from "../../utils/reduxStore/listingSlice";
import LoginNavbar from "../../components/LoginNavbar";

const DashBoard = () => {
  const listingStore = useSelector((store) => store.listing);
  const dispatch = useDispatch();
  const handleListingData = async () => {
    if (listingStore) return;
    try {
      const response = await axios.get(BASE_URL + "/list/yourlistings", {
        withCredentials: true,
      });
      // console.log(response?.data?.message);
      dispatch(addListing(response?.data?.message));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleListingData();
  }, []);

  if (!listingStore) return;
  if (listingStore && listingStore.length == 0)
    return <div> NO DATA FOUND!</div>;
  return (
    listingStore && (
      <div className="min-h-[80vh] flex flex-col justify-center items-center gap-5 pt-8 pb-16">
        <LoginNavbar />
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl font-semibold">Your Listings</h2>
          <div className="flex flex-col justify-center items-center gap-2">
            {listingStore.map((obj) => (
              <ListingCard key={obj._id} data={obj} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl font-semibold">Your Donations</h2>
        </div>
      </div>
    )
  );
};

export default DashBoard;
