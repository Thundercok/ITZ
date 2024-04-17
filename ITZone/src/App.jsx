import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/index.jsx";
import Login from "./pages/Login/index.jsx";
import User from "./pages/User/index.jsx";
import Home from "./pages/Home/index.jsx";
import Booking from "./pages/Booking/index.jsx";
import Main from "./pages/Main/index.jsx";
import Feedback from "./pages/Feedback/index.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<User />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
