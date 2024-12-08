import React from "react";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-logo">
        <img
          src="./biotrainlogo.png"
          alt="Montgomery College Logo"
          className="signup-logo-img"
        />
      </div>

      <div className="signup-form-container">
        <h1 className="signup-title">Sign up to track your progress</h1>
        <form className="signup-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" className="input-field" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" className="input-field" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <button type="button" className="signup-button">Sign up</button>
        </form>
        <p className="signin-text">
          Already have an account?{" "}
          <a href="/signin" className="signin-link">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

