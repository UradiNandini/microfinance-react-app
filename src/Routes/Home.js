import Navbar from "../Components/Navbar";
import "../Components/Css/style.css";
import "../Components/Css/bootstrap.min.css";
import "../Components/Css/responsive.css";
import "../Components/Css/jquery.mCustomScrollbar.min.css";
import "../Components/Css/owl.carousel.min.css";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header
        cName="banner_main ${props.cName"
        img
        className="banner_img ${photo}"
      />
      <Footer />
    </>
  );
}

export default Home;
