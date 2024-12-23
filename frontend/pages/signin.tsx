import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/app/firebaseConfig";
import "../styles/SignInPage.css";
import Link from 'next/link';

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in (e.g., redirect to dashboard)
    } catch (error) {
      setError((error as any).message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-logo">
        <Link href="/landing">
          <img
            src="./biotrainlogo.png"
            alt="Montgomery College Logo"
            className="signin-logo-img"
          />
        </Link>
      </div>

      <div className="signin-form-container">
        <h1 className="signin-title">Sign in to continue</h1>
        <form className="signin-form" onSubmit={handleSignIn}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signin-text">
          Don't have an account?{" "}
          <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
