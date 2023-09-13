import React from "react";
import iconf from "./assets/images/fb-icon1.png";
import icont from "./assets/images/twitter-icon1.png";
import iconl from "./assets/images/linkedin-icon1.png";
import icony from "./assets/images/youtub-icon1.png";
import loc from "./assets/images/map-icon.png";
import cal from "./assets/images/call-icon.png";
import mai from "./assets/images/mail-icon.png";
import "../Components/Css/style.css";
import "../Components/Css/bootstrap.min.css";
import "../Components/Css/responsive.css";
import "../Components/Css/jquery.mCustomScrollbar.min.css";
import "../Components/Css/owl.carousel.min.css";

function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="footer_content">
              <h4 className="footer_heading">Follow Us On:</h4>
              <div className="footer_social_icon">
                <ul>
                  <li>
                    <a href="/">
                      <img src={iconf} alt="Facebook" className="social_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={icont} alt="Twitter" className="social_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={iconl} alt="LinkedIn" className="social_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={icony} alt="YouTube" className="social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="footer_content text-right">
              <div className="location_text">
                <img src={loc} alt="Location" className="footer_icon" />
                <span className="footer_text">
                  P.o Box 3897, Dar es Salaam, Tanzania
                </span>
              </div>
              <div className="location_text">
                <img src={cal} alt="Call" className="footer_icon" />
                <span className="footer_text">+255-712462029</span>
              </div>
              <div className="location_text">
                <img src={mai} alt="Mail" className="footer_icon" />
                <span className="footer_text">myloan@tuinuane.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
