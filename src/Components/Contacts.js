import React, { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, for example, sending the data to an API.
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container-fluid">
          <h1 className="what_taital">Contact us</h1>
          <p className="amet_text">
            Do you have anything to tell us in details? Please feel free to
            write to us! We'd glad to hear from you.
          </p>
          <div className="contact_section2">
            <div className="row">
              <div className="col-md-6 padding_left_0">
                <div className="mail_section">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="mail_text_1"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      className="mail_text_1"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <textarea
                      className="massage_text"
                      placeholder="Message"
                      rows="5"
                      id="comment"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <div className="send_bt">
                      <button type="submit" className="button-53">
                        Send
                      </button>{" "}
                      {/* Change this to a submit button */}
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 padding_0">
                <div className="map-responsive">
                  <iframe
                    src="https://goo.gl/maps/3xJPD5CR9aqVXGWR7"
                    width="600"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
