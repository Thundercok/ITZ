import React from "react";
import styles from "./Login.module.css"; // Import CSS module

const Login = () => {
  return (
    <div className={`${styles["login-box"]} flex flex-col items-center mt-10`}>
      <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
      <form className="flex flex-col space-y-2">
        <label htmlFor="username" className="text-sm font-medium">Tên đăng nhập:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nhập tên đăng nhập"
          className={styles["input-field"]} // Use CSS module class
          required
        />
        <label htmlFor="password" className="text-sm font-medium">Mật khẩu:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Nhập mật khẩu"
          className={styles["input-field"]} // Use CSS module class
          required
        />
        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-blue-500 hover:underline">Quên mật khẩu?</a>
          <button type="submit" className={styles["submit-button"]}> {/* Use CSS module class */}
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
