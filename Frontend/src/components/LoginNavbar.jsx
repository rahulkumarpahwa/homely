import { useDispatch, useSelector } from "react-redux";
import { User } from "./svg/user";
import { Logout } from "./svg/Logout";
import { Profile } from "./svg/Profile";
import { Edit } from "./svg/Edit";
import { CreateListing } from "./svg/CreateListing";
import { Donate } from "./svg/Donate";
import { removeUser } from "../utils/reduxStore/userSlice";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { DashBoard } from "./svg/DashBoard";

const LoginNavbar = () => {
  const user = useSelector((store) => store.user);
  const storeDispatcher = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (!dropDown) return;
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropDown]);
  return (
    user && (
      <div className="w-full flex items-center justify-end px-8 h-10 gap-3 text-white bg-[#004156] relative">
        <div
          className="flex items-center justify-center gap-2 border-2 px-2 py-0.5 rounded-xl active:text-[#004156] active:bg-white cursor-pointer"
          onClick={() => setDropDown((d) => !d)}
          aria-haspopup="true"
          aria-expanded={dropDown}
        >
          <User />
          {user?.firstName
            ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
            : ""}{" "}
          {user?.lastName
            ? user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)
            : ""}
        </div>
        <div
          className="flex items-center justify-center gap-2 border-2 px-2 py-0.5 rounded-xl active:text-[#004156] active:bg-white"
          onClick={() => storeDispatcher(removeUser())}
          role="button"
          tabIndex={0}
        >
          <Logout /> Logout
        </div>

        {dropDown && (
          <div
            ref={dropdownRef}
            onMouseLeave={() => setDropDown(false)}
            className="w-48 absolute h-50 border-2 text-center m-0.5 z-50 top-[100%] right-32 rounded bg-white border-[#004156] text-black"
          >
            <ul>
              <li>
                <Link
                  className="flex items-center justify-center gap-2 border-b-2 border-[#004156]  font-semibold hover:text-white hover:bg-[#004156] rounded-tl-sm rounded-tr-sm"
                  to="/dashboard"
                >
                  <DashBoard /> Dash Board
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center gap-2 border-b-2 border-[#004156]  font-semibold hover:text-white hover:bg-[#004156] rounded-tl-sm rounded-tr-sm"
                  to="/profile"
                >
                  <Profile /> Profile
                </Link>
              </li>
              <li>
                <Link
                  className=" flex items-center justify-center gap-2 border-b-2 border-[#004156] text-[#004156] font-semibold hover:text-white hover:bg-[#004156]"
                  to="/edit-profile"
                >
                  <Edit /> Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  className=" flex items-center justify-center gap-2 border-b-2 border-[#004156] text-[#004156] font-semibold hover:text-white hover:bg-[#004156]"
                  to="/create-listing"
                >
                  <CreateListing />
                  Create Listing
                </Link>
              </li>
              <li className="flex items-center justify-center gap-2 text-[#004156] font-semibold hover:text-white hover:bg-[#004156]">
                <Donate />
                Donate
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  );
};
export default LoginNavbar;
