import React from "react";
import jim from "../Components/assets/images/jimmy.png";
import jim2 from "../Components/assets/images/jimmy.png";
import "../Components/Css/style.css";
import "../Components/Css/bootstrap.min.css";
import "../Components/Css/responsive.css";
import "../Components/Css/jquery.mCustomScrollbar.min.css";
import "../Components/Css/owl.carousel.min.css";

function Staff() {
  return (
    <div>
      {/* New Section for "Meet Our Team" Header */}
      <div className="what_we_do_section layout_padding">
        <div className="container">
          <h1 className="what_taital">Meet Our Team</h1>
          <p className="what_text">
            At Tuinuane, our success is driven by our dedicated and talented
            team of professionals. Each member brings a unique set of skills and
            experiences that contribute to our mission of empowering individuals
            and communities through accessible financial services. Get to know
            the faces behind our commitment to financial inclusion:
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="our-team">
              <div className="pic">
                <img src={jim} alt="Team Member" />
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin"></a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">James Mpanga</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add more team members here */}
          <div className="col-md-3 col-sm-6">
            <div className="our-team">
              <div className="pic">
                {/* Use imported images here */}
                <img src={jim2} alt="Team Member" />
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin"></a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">James Mpanga</h3>
                  <span className="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="our-team">
              <div className="pic">
                {/* Use imported images here */}
                <img src={jim2} alt="Team Member" />
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin"></a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">James Mpanga</h3>
                  <span className="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add one more team member */}
          <div className="col-md-3 col-sm-6">
            <div className="our-team">
              <div className="pic">
                {/* Use imported images here */}
                <img src={jim} alt="Team Member" />
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin"></a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3 className="title">James Mpanga</h3>
                  <span className="post">New Role</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
