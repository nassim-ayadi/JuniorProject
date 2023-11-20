import React from "react";
import "./WelcomePage.css";
import backgroundImage from "../background.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Home = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Set the height to at least the viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexWrap: "nowrap",
  };


  

  return (
    <div style={backgroundStyle}>
      <div class="animated-title">
        <div class="text-top">
          <div>
            <span>welcome to</span>
            <span>healthy SMU </span>
          </div>
        </div>
        <div class="text-bottom">
          <div>your health is our priority!</div>
        </div>
      </div>

      <p>
        <b>
          Welcome to healthy SMU – your gateway to accessible and confidential
          healthcare support!
        </b>
        <br></br>
        At healthy SMU you can easily and quickly book meetings with dedicated
        healthcare professionals.<br></br> Whether you're seeking guidance from
        compassionate nurses or looking to connect with experienced
        psychologists,<br></br> Your
        well-being is our priority, and we're here to support you every step of
        the way.<br></br> Explore the possibilities of personalized healthcare
        at healthy SMU Take control of your health journey<br></br> by
        scheduling meetings that fit seamlessly into your student life.<br></br>{" "}
        Your well-being is our priority, and we're here to support you every
        step of the way.<br></br> Login and explore the possibilities of
        personalized healthcare at healthy SMU .
      </p>

      <div className="login_button">
        <Button variant="contained" color="success">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              width: "70px",
            }}
          >
            login
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
