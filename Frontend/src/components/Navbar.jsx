import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="flex flex-row mx-20 mt-3 items-center">
    <Link
      className="font-extrabold text-2xl text-[#005c7a] no-underline mr-8"
      to="/"
    >
      homely<span className="text-[#61e212]">.org</span>
    </Link>
    <div className="flex flex-row ml-auto space-x-8 items-center text-[1.5rem] font-medium">
      <Link className="text-black hover:text-[#005c7a]" to="/getinvolved">
        Get involved
      </Link>
      <Link className="text-black hover:text-[#005c7a]" to="/about">
        Who we are
      </Link>
      <Link
        className="bg-black text-white px-4 py-2 rounded font-medium text-[1.5rem] hover:bg-[#005c7a] hover:text-white transition-transform transform hover:scale-105"
        to="/donate"
      >
        Donate
      </Link>
    </div>
  </nav>
);
