import React, { useState } from "react";
import Header from "../../components/Header";
import "./styles.css";

const BookingPage = () => {
  const [fullName, setFullName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formDate, setFormDate] = useState("");
  const [devicePassword, setDevicePassword] = useState("");
  const [email, setEmail] = useState("");
  const [ssosCode, setSsosCode] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    setSubmitted(true);
    // Clear form fields
    setFullName("");
    setStudentID("");
    setPhoneNumber("");
    setFormDate("");
    setDevicePassword("");
    setEmail("");
    setSsosCode("");
    setDetails("");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="box">
          <h1 className="heading">Lên đơn hỗ trợ thiết bị</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="fullName">Họ & tên</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="studentID">Mã số sinh viên</label>
              <input
                type="text"
                id="studentID"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="devicePassword">Mật khẩu thiết bị</label>
              <input
                type="text"
                id="devicePassword"
                value={devicePassword}
                onChange={(e) => setDevicePassword(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
           
            <div className="input-field">
              <label htmlFor="details">Thiết bị của bạn bị gì?</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
            {submitted && (
              <p className="submitted-message">Đã lên đơn</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
