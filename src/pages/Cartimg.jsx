import React from "react";
import SideIcon from "../assets/images/illustration-empty-cart.svg";

function Cartimg() {
  return (
    <>
      <div
        className="side-content d-fle justify-content-center mt-5 "
        style={{ textAlign: "center" }}
      >
        <img src={SideIcon} alt="img" />
        <p style={{ color: "hsl(12, 20%, 44%)" }} className="pb-5">
          Your added items appear here
        </p>
      </div>
    </>
  );
}

export default Cartimg;
