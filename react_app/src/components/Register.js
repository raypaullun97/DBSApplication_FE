import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "./SignIn.css";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (!user) return;
    if (user) {
      navigate("/TasksPage");
    }
  }, [user]);

  // Register
  const register = async () => {
    console.log("register");
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ); // 2 items are done with this function: 1. Automatically generates a user and saves it in Firebase, 2. Logs the user in
      console.log(user);
    } catch (error) {
      console.log("error at register");
      alert(error.message);
    }
  };

  return (
    <div className="signin">
      <div className="fields">
        <h1>Register</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <Link>
          <button className="signInButton" onClick={register}>
            Register
          </button>
        </Link>
        {/* Endpoint to route to Home component */}
        <Link to="/">Back to Sign In Page</Link>
      </div>
    </div>
  );
};

export default Register;
