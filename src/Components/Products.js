import React from "react";
import icon1 from "./assets/images/icon-1.png";
import icon2 from "./assets/images/icon-2.png";
import icon3 from "./assets/images/icon-3.png";
import icon4 from "./assets/images/icon-4.png";

function Products() {
  return (
    <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital">Our Loans</h1>
        <p className="what_text">
          Explore our range of loan products to meet your financial needs.
        </p>
        <div className="what_we_do_section_2">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="box_main">
                <div className="icon_1">
                  <img src={icon1} alt="Icon 1" />
                </div>
                <h3 className="accounting_text">Civil Servant Loan</h3>
                <p className="lorem_text">
                  The Civil Servant Loan is a facility specially developed to
                  meet the financial needs of all civil servants. It offers loan
                  amounts ranging from TZS 100,000 to TZS 20,000,000 with a loan
                  term of 3 to 96 months. The interest rate is 3.5%. Application
                  requirements include a copy of your original work ID, national
                  ID, passport-sized photo, three months' salary slips, copy of
                  ATM card, and employment approval or contract. Terms and
                  conditions apply.
                </p>
                <div className="moremore_bt_1">
                  <a href="/">Learn More </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="box_main">
                <div className="icon_1">
                  <img src={icon2} alt="Icon 2" />
                </div>
                <h3 className="accounting_text">LBF Loan</h3>
                <p className="lorem_text">
                  The LBF Loan (Gari Lako Mkopo Wako) is a loan secured against
                  the value of your car, ideal for various purposes. You can
                  borrow from TZS 1,000,000 to TZS 30,000,000 with a term of 3
                  to 18 months. The interest rate is 3.5%. Qualifications
                  include owning a motor vehicle, having a legal source of
                  income, and being 18+ years old. Application requirements
                  include a copy of your national ID, driving license, letter
                  from the local government, bank statements, photos, vehicle
                  registration card, insurance cover, and more.
                </p>
                <div className="moremore_bt_1">
                  <a href="/">Learn More </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="box_main">
                <div className="icon_1">
                  <img src={icon3} alt="Icon 3" />
                </div>
                <h3 className="accounting_text">LBF Top Up / Re-Finance</h3>
                <p className="lorem_text">
                  The LBF Top Up / Re-Finance Loan is available for clients with
                  an active LBF Loan account. Qualifications include being a
                  current client with at least 1/3 of your current loan
                  installments paid on time. Loan amounts range from TZS
                  1,000,000 to TZS 30,000,000 with a term of 3 to 18 months. The
                  interest rate is 3.5%. Application requirements include 6
                  months of bank statements and a passport-sized photo.
                </p>
                <div className="moremore_bt_1">
                  <a href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="box_main">
                <div className="icon_1">
                  <img src={icon4} alt="Icon 4" />
                </div>
                <h3 className="accounting_text">STOCK 24/7</h3>
                <p className="lorem_text">
                  STOCK 24/7 is a loan product designed to provide a fast
                  solution to bar, grocery, and liquor store owners. To qualify,
                  you must own a bar, grocery, or liquor store that has been in
                  business for at least 12 months. Loan amounts range from TZS
                  250,000 to TZS 2,000,000 with a term of 7 days. The interest
                  rate is 3.5%. Application requirements include a TIN
                  Certificate, business license, national ID of an authorized
                  person, registered mobile number, local government letter, and
                  mobile money wallet or bank statements for at least 6 months.
                </p>
                <div className="moremore_bt_1">
                  <a href="/">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
