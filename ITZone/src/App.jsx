import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import Booking from "./pages/Booking/index.jsx";
import Main from "./pages/Main/index.jsx";
import Feedback from "./pages/Feedback/index.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
