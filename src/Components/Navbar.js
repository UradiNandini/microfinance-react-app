import React from "react";
import logo from "./assets/images/logo.png";
import "../Components/Css/style.css";
import "../Components/Css/bootstrap.min.css";
import "../Components/Css/responsive.css";
import "../Components/Css/jquery.mCustomScrollbar.min.css";
import "../Components/Css/owl.carousel.min.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {MenuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className={`nav-link ${item.cName}`} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
