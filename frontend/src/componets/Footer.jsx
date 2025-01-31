import React from "react";
import Logo from "../assets/images/reslogo.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="lightred">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 footer d-flex align-items-start">
            <div className="footer__logo ">
              <img src={Logo} alt="logo" style={{ width: "18%" }} />
              <h5 className="rocknroll-one-regular">Tasty Treat</h5>
              <p>Best Pizzas in town, try it out!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 footer d-flex align-items-start justify-content-center">
            <div>
              <h5 className="footer__title mb-3 rocknroll-one-regular">
                Delivery Time
              </h5>
              <div className="delivery__time-item border-0 ps-0 d-flex flex-column">
                <span>Friday - Tuesday</span>
                <p>10:00am - 11:00pm</p>
              </div>
              <div className="delivery__time-item border-0 ps-0 d-flex flex-column">
                <span>Wednesday - Thursday</span>
                <p>Off day</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 footer d-flex align-items-start justify-content-center">
            <div>
              <h5 className="footer__title mb-3 rocknroll-one-regular">
                Contact
              </h5>
              <div className="delivery__time-item border-0 ps-0 d-flex flex-column">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </div>
              <div className="delivery__time-item border-0 ps-0 d-flex flex-column">
                <span>Phone: 01712345678</span>
                <span>Email: example@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 footer d-flex align-items-start flex-column justify-content-center">
            <div>
              <h6 className="footer-title rocknroll-one-regular">Newsletter</h6>
              <p>Subscribe our newsletter</p>
            </div>
            <form action="">
              <div className="mb-3 d-flex">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <button className="btn btn-danger">Subscribe </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
