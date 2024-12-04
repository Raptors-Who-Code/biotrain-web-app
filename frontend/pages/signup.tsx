import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/app/firebaseConfig";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful signup (e.g., redirect to another page)
    } catch (error) {
      setError((error as any).message);
    }
  };

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
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <input
              type="text" placeholder="First Name" className="input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text" placeholder="Last Name" className="input-field"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email" placeholder="Email" className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password" placeholder="Password"className="input-field" value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;