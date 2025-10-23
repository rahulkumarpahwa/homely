import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LoginNavbar from "../components/LoginNavbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <LoginNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
