import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavBar.css";
import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";

function NavigationBar() {
  // logout
  const logout = async () => {
    console.log("Sign out in progress");
    await signOut(auth);
    console.log("Sign out successful");
  };

  return (
    <Navbar bg="transparent" expand="lg" className="navbar">
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/TasksPage" className="navs">
            Tasks
          </Nav.Link>
          <Nav.Link href="/" onClick={logout} className="navs">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
