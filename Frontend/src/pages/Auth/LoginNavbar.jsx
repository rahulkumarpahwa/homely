import { useDispatch, useSelector } from "react-redux";
import { User } from "../../components/svg/user";
import { Logout } from "../../components/svg/Logout";
import { removeUser } from "../../utils/reduxStore/userSlice";
import { useState } from "react";

const LoginNavbar = () => {
  const user = useSelector((store) => store.user);
  const storeDispatcher = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  return (
    user && (
      <div className="w-full flex items-center justify-end px-8 h-10 gap-3 text-white bg-[#004156] relative">
        <div
          className="flex items-center justify-center gap-2 border-2 px-2 py-0.5 rounded-xl active:text-[#004156] active:bg-white"
          onMouseUpCapture={() => setDropDown(!dropDown)}
        >
          <User />
          {user.firstName.charAt(0).toUpperCase() +
            user.firstName.slice(1)}{" "}
          {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
        </div>
        <div
          className="flex items-center justify-center gap-2 border-2 px-2 py-0.5 rounded-xl active:text-[#004156] active:bg-white"
          onClick={() => storeDispatcher(removeUser())}
        >
          <Logout /> Logout
        </div>

        {dropDown && (
          <div
            className="w-48 absolute h-50 border-2 text-center m-0.5 z-50 top-[100%] right-32 rounded bg-white border-[#004156] text-black"
            onmouseleave={() => setDropDown(false)}
          >
            <ul>
              <li className="border-b-2 border-[#004156]  font-semibold hover:text-white hover:bg-[#004156] rounded-tl-sm rounded-tr-sm">
                Profile
              </li>
              <li className="border-b-2 border-[#004156] text-[#004156] font-semibold hover:text-white hover:bg-[#004156]">
                Edit Profile
              </li>
              <li className="border-b-2 border-[#004156] text-[#004156] font-semibold hover:text-white hover:bg-[#004156]">
                Create Listing
              </li>
              <li className=" text-[#004156] font-semibold hover:text-white hover:bg-[#004156]">
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
