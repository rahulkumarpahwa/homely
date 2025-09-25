import { useReducer } from "react";
import { reducer, intialState } from "../utils/loginReducer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        { ...state },
        { withCredentials: true }
      );
      console.log(response);
      return navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const setEmail = (email) => {
    dispatch({ type: "SET_EMAIL", payload: email });
  };

  const setPassword = (password) => {
    dispatch({ type: "SET_PASSWORD", payload: password });
  };

  return (
    <div className="min-h-[80vh] py-32">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-5xl font-bold">Login Now!</h2>
        <p className="text-[1.4rem] font-semibold">
          Login to donate or get help.
        </p>
        <div className="flex items-center justify-center space-x-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-2 px-2 py-1"
            value={state.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center space-x-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border-2 px-2 py-1"
            value={state.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="border px-8 py-2 rounded-2xl bg-black text-white text-xl hover:bg-[#005c7a]"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
