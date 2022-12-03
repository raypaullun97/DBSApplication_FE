import React from "react";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignIn2.css";
import { Form, Container, Navbar } from 'react-bootstrap';
import dbsLogo from "../images/DBS-logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const BASE_URL = "http://172.20.10.2:5000"

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/TasksPage");
  }, [user, loading]);

  // const signin = async () => {
  //   console.log("sign in");
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     ); // 2 items are done with this function: 1. Automatically generates a user and saves it in Firebase, 2. Logs the user in
  //     console.log(user);
  //   } catch (error) {
  //     console.log("error at sign in");
  //     alert(error.message);
  //   }
  // };

  async function signin() {
    console.log(loginEmail)
    console.log(loginPassword)

    if (!loginEmail || !loginPassword) {
      setLoginFailed(true)
    } else {
      // const response = await axios.post((BASE_URL + '/account/login'), {
      //   "credentials" : {
      //     "username" : loginEmail,
      //     "password" : loginPassword
      //   }
      // })
      setLoginFailed(false)
      navigate('/Home')

      // console.log(response.data)
    }
  }

  return (
    <React.Fragment>
      <Navbar bg="dark">
        
          <Navbar.Brand href="#home" className='mx-2'>
            <img
              src={dbsLogo}
              width="75"
              height="50"
              className="d-inline-block align-top mx-2"
              alt="dbsLogo"
            />
          </Navbar.Brand>
        
      </Navbar>
        <div className="signin home-bg backgroundLogin">
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
              <button className="signInButton button" onClick={signin}>
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
        

    </React.Fragment>


  );
};

export default SignIn;
