import React from "react";
import Tasty from "../assets/images/location.png";

function TastyTreat() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={Tasty} alt="img" className="w-100 zoom" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="rocknroll-one-regular">
            Why <span className="red">Tasty Treat?</span>
          </h1>
          <p>
          At Tasty Treat, we bring you delicious, high-quality meals with the convenience of online ordering. Whether you’re craving a quick bite or a gourmet feast, we’ve got you covered!
          </p>
          <div className="mt-5">
            <h5 style={{ fontWeight: "700" }} ><i className="fa-solid fa-check pe-2" style={{color:" #ff0000"}}></i>Fresh and tasty foods</h5>
            <p className="">
            We use only the finest, farm-fresh ingredients to prepare our dishes.
            </p>
          </div>
          <div className="mt-5">
            <h5 style={{ fontWeight: "700" }} className="mb-3"><i className="fa-solid fa-check pe-2" style={{color:" #ff0000"}}></i>Quality support</h5>
            <p>
            We use only the freshest ingredients to prepare mouthwatering dishes.
            </p>
          </div>
          <div className="mt-5">
            <h5 style={{ fontWeight: "700" }}><i className="fa-solid fa-check pe-2" style={{color:" #ff0000"}}></i>Order from any location</h5>
            <p>
            A seamless online experience with secure payments and real-time tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TastyTreat;
