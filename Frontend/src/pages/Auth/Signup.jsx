import { reducer, intialState } from "../../utils/signupReducer";
import { useReducer } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const Signup = () => {
  const [state, dispatcher] = useReducer(reducer, intialState);
  const setEmail = (email) => {
    dispatcher("SET_EMAIL", email);
  };

  const setPassword = (password) => {
    dispatcher("SET_PASSWORD", password);
  };

  const handleSignup = async () => {
    const response = await axios.post(
      BASE_URL + "/auth/signup",
      { ...state },
      { withCredentials: true }
    );
  };

  return (
    <div className="min-h-[80vh] py-32">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-5xl font-bold">Signup </h2>
        <p className="text-[1.4rem] font-semibold">
          Signup to donate or get help.
        </p>
        <div className="border-2 p-4 rounded-xl flex items-center flex-col justify-center gap-8">
          <div className="flex items-center justify-center w-80 py-1 gap-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="border-2 px-2 py-1"
              value={state.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center w-80 py-1 gap-5">
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
            onClick={handleSignup}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
