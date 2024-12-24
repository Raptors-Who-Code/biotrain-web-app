import React from "react";
import "../styles/SignInPage.css";

const ReturningOrNewPage = () => {
  return (
    <div className="returning-new-container">
      <div className="logo-container">
        <img
          src="./biotrainlogo.png"
          alt="Montgomery College Logo"
          className="logo-image"
        />
      </div>

      <div className="content-container">
        <h1 className="question">Are you a returning or new student?</h1>
        <div className="button-container">
          <button className="button">Returning</button>
          <button className="button">New</button>
        </div>
      </div>
    </div>
  );
};

export default ReturningOrNewPage;
