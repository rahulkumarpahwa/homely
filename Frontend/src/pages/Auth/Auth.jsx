import { reducer, initialState } from "../../utils/reducers/authReducer.js";
import { useReducer, useState } from "react";

import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/reduxStore/userSlice.js";

const Auth = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const storeDispatcher = useDispatch();

  const setEmail = (email) => {
    dispatcher({ type: "SET_EMAIL", payload: email });
  };

  const setPassword = (password) => {
    dispatcher({ type: "SET_PASSWORD", payload: password });
  };

  const setFirstName = (firstName) => {
    dispatcher({ type: "SET_FIRSTNAME", payload: firstName });
  };

  const setLastName = (lastName) => {
    dispatcher({ type: "SET_LASTNAME", payload: lastName });
  };

  const setMobile = (mobile) => {
    dispatcher({ type: "SET_MOBILE", payload: mobile });
  };

  const setAddress = (address) => {
    dispatcher({ type: "SET_ADDRESS", payload: address });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        { email: state.email, password: state.password },
        { withCredentials: true }
      );
      storeDispatcher(addUser(response?.data?.user));
      console.log(response);
      toast.success("User LoggedIn Successfully!");
      return navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/signup",
        { ...state },
        { withCredentials: true }
      );
      console.log(response);
      toast.success("User Signup SuccessFully!");
      return navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[80vh] py-20">
      <div className="flex items-center justify-center flex-col gap-3">
        <h2 className="text-5xl font-bold">
          {isLoginPage ? "Login" : "Signup"}{" "}
        </h2>
        <p className="text-[1.4rem] font-semibold">
          {isLoginPage ? "Login" : "Signup"} to donate or get help.
        </p>
        <div className="border-2 p-4 rounded-xl flex items-center flex-col justify-center gap-3">
          <div className="flex flex-col items-center justify-center w-full">
            {!isLoginPage && (
              <>
                <div className="flex flex-row items-center justify-center w-96 py-1 gap-5">
                  <label htmlFor="firstName" className="w-20 text-center">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border-2 px-2 py-1 flex-1"
                    value={state.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-row items-center justify-center w-96 py-1 gap-5">
                  <label htmlFor="lastName" className="w-20 text-center">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border-2 px-2 py-1 flex-1"
                    value={state.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex flex-row items-center justify-center w-96 py-1 gap-5">
                  <label htmlFor="mobile" className="w-20 text-center">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    className="border-2 px-2 py-1 flex-1"
                    value={state.mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="flex flex-row items-center justify-center w-96 py-1 gap-5">
                  <label htmlFor="address" className="w-20 text-center">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="border-2 px-2 py-1 flex-1"
                    value={state.address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className="flex flex-row items-center justify-center w-96 py-1 gap-5">
              <label htmlFor="email" className="w-20 text-center">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 px-2 py-1 flex-1"
                value={state.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center justify-center w-96 py-1 gap-5">
              <label htmlFor="password" className="w-20 text-center">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-2 px-2 py-1 flex-1"
                value={state.password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="border px-8 py-2 rounded-2xl bg-black text-white text-xl hover:bg-[#005c7a]"
            onClick={isLoginPage ? handleLogin : handleSignup}
          >
            {isLoginPage ? "Login" : "Signup"}
          </button>
          <button
            onClick={() => setIsLoginPage(!isLoginPage)}
            className="hover:underline"
          >
            {isLoginPage
              ? "New User! Signup Here →"
              : "Already register! Login Here →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
