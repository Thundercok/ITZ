import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/index.jsx";
import Login from "./pages/Login/index.jsx";
import User from "./pages/User/index.jsx";
import Home from "./pages/Home/index.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
