import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homely from "./pages/homely";
import About from "./pages/about";
import Donate from "./pages/donate";
import GetInvolved from "./pages/getInvolved";
import {Navbar} from "./components/Navbar.jsx"
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homely />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
