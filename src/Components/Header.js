import React from "react";
import picha from "../Components/assets/images/banner-img.png";
import pic from "../Components/assets/images/img-1.png";
import "../Components/Css/style.css";
import "../Components/Css/bootstrap.min.css";
import "../Components/Css/responsive.css";
import "../Components/Css/jquery.mCustomScrollbar.min.css";
import "../Components/Css/owl.carousel.min.css";

function Header() {
  return (
    <>
      <div className="header_section">
        <div className="header_left">
          <div className="banner_main">
            <h1 className="banner_taital">Tuinuane Microfinance Limited.</h1>
            <p className="banner_text">
              Get A loan Quick like 1-2-3 with us today. Empowering Dreams, One
              Microloan at a Time!
            </p>
            <div className="btn_main">
              <div className="more_bt">
                <a href="/services">Read More</a>
              </div>
              <div className="contact_bt">
                <a href="/contactus">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header_right">
          <img src={picha} className="banner_img" alt="Banner" />
        </div>
      </div>
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="services_taital">
                WELCOME TO TUINUANE MICROFINANCE
              </h1>
              <p className="services_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it
              </p>
              <div className="moremore_bt">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={pic} className="image_1" alt="Image 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
