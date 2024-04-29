import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import Header from "../../components/Header";
import "./styles.css"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // Initialize useHistory hook

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Nhập chưa hết kìa chú em");
    } else {
      console.log("Tên đăng nhập:", username);
      console.log("Mật khẩu:", password);
      // Clear form fields
      setUsername("");
      setPassword("");
      setError("");
      // Redirect to dashboard
      history.push("/dashboard");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle Forgot Password logic, like sending a reset link via email
    console.log("Forgot Password Clicked");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="sideText">
          <p>Chào bạn nha,</p>
          <p>Chúc một ngày làm việc suôn sẻ!</p>
        </div>
        <div className="box">
          <h1 className="heading">Đăng nhập</h1>
          {error && <p className="error">{error}</p>}
          <form className="form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">
              Đăng nhập
            </button>
            <p className="forgotPassword" onClick={handleForgotPassword}>
              Quên mật khẩu?
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
