import React from "react";
import abt from "../Components/assets/images/img-1.png";

function AboutUs() {
  return (
    <>
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="services_taital">Mission.</h1>
              <p className="services_text">
                Our mission is to empower individuals and communities by
                providing accessible and inclusive financial services. We are
                committed to fostering financial inclusion, promoting
                entrepreneurship, and supporting economic growth. Through our
                microfinance services, we aim to alleviate poverty, create
                sustainable livelihoods, and empower individuals to build a
                better future for themselves and their families.
              </p>
              <div className="moremore_bt">
                <a href="/">Read More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={abt} className="image_1" alt="About Us" />
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="services_taital">Vision.</h1>
              <p className="services_text">
                Our vision is to be a leading microfinance institution that
                transforms lives and communities through financial inclusion. We
                envision a society where everyone, regardless of their
                socio-economic background, has equal access to financial
                resources, opportunities, and tools for self-reliance. We strive
                to be a catalyst for positive change, driving economic
                empowerment and social development through our innovative and
                responsible microfinance solutions. Together, we can build a
                more inclusive and equitable world.
              </p>
              <div className="moremore_bt">
                <a href="/">Read More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={abt} className="image_1" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
