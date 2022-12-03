import React from "react";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignIn.css";

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/TasksPage");
  }, [user, loading]);

  const signin = async () => {
    console.log("sign in");
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ); // 2 items are done with this function: 1. Automatically generates a user and saves it in Firebase, 2. Logs the user in
      console.log(user);
    } catch (error) {
      console.log("error at sign in");
      alert(error.message);
    }
  };

  return (
    <div className="signin">
      <div className="fields">
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <Link>
          <button className="signInButton" onClick={signin}>
            Sign In
          </button>
        </Link>
        <div>
          New user?
          <Link to="/Register" style={{ marginLeft: 5 }}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
