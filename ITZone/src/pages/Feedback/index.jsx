import React, { useState } from "react";
import Header from "../../components/Header";
import "./styles.css"; 

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to submit feedback, like sending it to an API
    console.log("Feedback submitted:", feedback);
    setFeedback("");
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="box">
          <h1 className="heading">Gửi phản hồi</h1>
          {submitted && <p className="success">Phản hồi của bạn đã được gửi thành công!</p>}
          {!submitted && (
            <form className="form" onSubmit={handleSubmit}>
              <textarea
                placeholder="Nhập phản hồi của bạn..."
                value={feedback}
                onChange={handleInputChange}
                className="textarea"
              ></textarea>
              <button type="submit" className="button">
                Gửi phản hồi
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Feedback;
