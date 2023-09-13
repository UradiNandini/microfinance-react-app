import "./styles.css";
import "./Components/Css/bootstrap.min.css";
import "./Components/Css/responsive.css";
import "./Components/Css/jquery.mCustomScrollbar.min.css";
import "./Components/Css/owl.carousel.min.css";
import React from "react";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Services from "./Routes/Services";
import Team from "./Routes/Team";
import About from "./Routes/About";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactus" element={<Contact Us />} />
      </Routes>
    </div>
  );
}
//export default App;
