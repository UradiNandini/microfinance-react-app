import Navbar from "../Components/Navbar";
import "../Components/Css/style.css";
import "../Components/Css/bootstrap.min.css";
import "../Components/Css/responsive.css";
import "../Components/Css/jquery.mCustomScrollbar.min.css";
import "../Components/Css/owl.carousel.min.css";
import React from "react";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
