import { useSelector } from "react-redux";
import { Link } from "react-router";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const { firstName, lastName, email, mobile, address } = user;
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center gap-5 pt-8 pb-16">
      <h1 className="text-5xl font-bold text-[#004156]">Profile</h1>
      <div className="grid grid-cols-2 border-4 text-[#004156] font-semibold border-[#004156] p-2 rounded-xl">
        <div className="border-2 border-[#004156] m-1 p-1">First Name</div>
        <div className="border border-[#004156] m-1 p-1">
          {firstName.charAt(0).toUpperCase() + firstName.slice(1)}
        </div>
        <div className="border-2 border-[#004156] m-1 p-1">Last Name</div>
        <div className="border border-[#004156] m-1 p-1">
          {lastName.charAt(0).toUpperCase() + lastName.slice(1)}
        </div>
        <div className="border-2 border-[#004156] m-1 p-1">Email</div>
        <div className="border border-[#004156] m-1 p-1">{email}</div>
        <div className="border-2 border-[#004156] m-1 p-1">Mobile</div>
        <div className="border border-[#004156] m-1 p-1">{mobile}</div>
        <div className="border-2 border-[#004156] m-1 p-1">Address</div>
        <div className="border border-[#004156] m-1 p-1">{address}</div>
      </div>
      <div className="flex gap-3">
        <Link
          to="/edit-profile"
          className="border px-8 py-2 rounded text-white bg-[#005c7a]"
        >
          Edit
        </Link>
        <Link
          to="/dashboard"
          className="border px-8 py-2 rounded text-white bg-[#005c7a]"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Profile;
