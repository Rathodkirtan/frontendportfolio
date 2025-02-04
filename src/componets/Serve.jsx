import React from "react";
import Service01 from "../assets/images/service01.png";
import Service02 from "../assets/images/service02.png";
import Service03 from "../assets/images/service03.png";

function Serve() {
  return (
    <>
      <div className="container text-center mt-5" style={{ marginTop: "50px" }}>
        <h4 className="red rocknroll-one-regular mt-5">What we serve</h4>
        <h1 className="mb-4 hero__title rocknroll-one-regular">
          <span className="blue">Just sit back at home we will</span>{" "}
          <span className="red">take care</span>
        </h1>
        <p>
          Satisfy your cravings with just a few clicks! Explore a variety of
          cuisines, enjoy exclusive deals, and get your favorite dishes
          delivered hot and fresh to your doorstep. Your next meal is just a tap
          away!
        </p>
        <div
          className="row d-flex justify-content-between"
          style={{ margin: "0px,100px" }}
        >
          <div className="col-12 col-md-4">
            <img src={Service01} alt="img" className="zoom"/>
            <h4 className="rocknroll-one-regular">Quick Delivery</h4>
            <p>
              Enjoy quick and reliable delivery with Tasty Treat, bringing your
              favorite meals straight to your doorstep in no time.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src={Service02} alt="img" className="zoom"/>
            <h4 className="rocknroll-one-regular">Super Dine In</h4>
            <p>
              Experience the ultimate dining experience with our Super Dine-In
              service at Tasty Treat.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src={Service03} alt="img" className="zoom"/>
            <h4 className="rocknroll-one-regular">Easy Pick Up</h4>
            <p>
              With our Easy Pick-Up service, grabbing your favorite meals has
              never been simpler.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serve;
