import { Link } from "react-router";

const GetHelp = () => {
  return (
    <div>
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-16">
        <h1 className="text-7xl font-bold text-[#005c7a] mb-8">Get Help</h1>
        <p className="text-3xl font-bold">
          {" "}
          <Link className="hover:underline" to="/signup">
            {" "}
            SignUp
          </Link>{" "}
          or{" "}
          <Link to="/login" className="hover:underline">
            {" "}
            LogIn
          </Link>{" "}
          to get the help and get the response quickly.
        </p>
      </div>
    </div>
  );
};

export default GetHelp;
