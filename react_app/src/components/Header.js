import PropTypes from "prop-types";
import Button from "./Button";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = ({ title, onAdd, showAdd }) => {
  // link to Flask backend

  const [profileData, setProfileData] = useState(null);

  function getData() {
    axios
      .get("/test")
      .then((response) => {
        console.log("in header.js");
        // console.log(response);
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });

        console.log(profileData.about);
      })
      .catch((error) => {
        if (error.response) {
          console.log("in here");
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  // useEffect runs every time we refresh the page or when the data changes
  useEffect(() => {
    getData();
  }, []);

  // end of link to Flask backend

  return (
    <header className="header">
      {profileData && <h1>Welcome {profileData.profile_name}</h1>}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// if we parse any title prop from App.js, it will override this default title prop
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
