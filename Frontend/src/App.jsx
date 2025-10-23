import { BrowserRouter, Routes, Route } from "react-router";
import Homely from "./pages/homely";
import About from "./pages/about";
import Donate from "./pages/donate";
import GetInvolved from "./pages/GetInvolved.jsx";
import GetHelp from "./pages/gethelp.jsx";
import DashBoard from "./pages/Listings/DashBoard.jsx";
import CreateListing from "./pages/Listings/CreateListing.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/reduxStore/appStore.js";
import { Toaster } from "react-hot-toast";
import EditListing from "./pages/Listings/EditListing.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import ProtectedRoute from "./pages/Auth/ProctectedRoute.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
import EditProfile from "./pages/User/EditProfile.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Homely />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/gethelp" element={<GetHelp />} />
            <Route path="/join" element={<Auth />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/createlisting"
              element={
                <ProtectedRoute>
                  <CreateListing />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editlisting"
              element={
                <ProtectedRoute>
                  <EditListing />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
}

export default App;
