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
import { Provider } from "react-redux";
import { store } from "./utils/appStore.js";
import { Toaster } from "react-hot-toast";
import EditListing from "./pages/Listings/EditListing.jsx";
import Signup from "./pages/Auth/Signup.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homely />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/gethelp" element={<GetHelp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/createlisting" element={<CreateListing />} />
          <Route path="/editlisting" element={<EditListing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
}

export default App;
