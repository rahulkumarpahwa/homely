import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homely from "./pages/homely";
import About from "./pages/about";
import Donate from "./pages/donate";
import GetInvolved from "./pages/getInvolved";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import GetHelp from "./pages/gethelp.jsx";
import { Login } from "./pages/Auth/Login.jsx";
import DashBoard from "./pages/Listings/DashBoard.jsx";
import CreateListing from "./pages/Listings/CreateListing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homely />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/gethelp" element={<GetHelp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/createlisting" element={<CreateListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
