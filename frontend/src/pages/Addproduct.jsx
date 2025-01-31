import React, { useEffect, useState } from "react";
import Tree from "../assets/images/icon-carbon-neutral.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Cartimg from "./Cartimg";
import Swal from "sweetalert2";
import axios from "axios";

const handleralter = () => {
  Swal.fire("Your order submit successfully");
};

const erroralter = () => {
  Swal.fire("Error!", "Please login first", "error");
};

function Addproduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setcart] = useState(location.state || []);
  const [data, setdata] = useState({});

  const orderTotal = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const changehandler = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
      orderdate: Date(),
      orderproduct: cart,
      total: orderTotal,
      
    });
  };
  console.log(data);
  const ordersubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/cust/api/order", data,{headers: { Authorization: localStorage.getItem("token")} })
      .then((res) => {
        console.log(res.data);
        handleralter();
        navigate("/");
      })
      .catch((err) => {
        erroralter();
        console.log(err.response.status);
        if (err.response.status == 400) {
          navigate("/login");
        }
      });
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setcart(updatedCart);
    setdata({ ...cart, orderproduct: updatedCart });
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6">
            <form
              action="http://localhost:8000/cust/api/order"
              method="post"
              onSubmit={ordersubmit}
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                      name="name"
                      onChange={changehandler}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Contact Number
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="10-digit moblie number"
                      name="contact"
                      onChange={changehandler}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Pincode
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Pincode"
                      name="pincode"
                      onChange={changehandler}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Locality
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Locality"
                      name="locality"
                      onChange={changehandler}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Address..."
                      rows="3"
                      name="address"
                      required
                      onChange={changehandler}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      City/District/Town
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="City/District/Town"
                      name="city"
                      onChange={changehandler}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    State
                  </label>
                  <select
                    className="form-select mb-3"
                    aria-label="--Select State--"
                    name="state"
                    onChange={changehandler}
                    required
                  >
                    <option value="">--Select State--</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Maharatra">Maharatra</option>
                    <option value="Goa">Goa</option>
                  </select>
                </div>
              </div>
              <div className="total d-flex justify-content-between p-2 align-items-center">
                <div>
                  <h5>Payment option</h5>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <h5 className="ms-2">Cash on delivery</h5>
                  </div>
                </div>
                <div>
                  <h5 className="me-4">Order Total</h5>
                  <h5>{orderTotal}</h5>
                </div>
              </div>
              <div
                className="btn d-flex justify-content-center mb-3"
                style={{ width: "100%" }}
              >
                <button
                  style={{
                    background: "hsl(14, 64%, 47%)",
                    color: "white",
                    // width: "100%",
                  }}
                  className="border-0 rounded-pill px-2 p-1"
                  type="submit"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6">
            {cart.length == 0 && <Cartimg />}

            <div>
              <h1 className="red rocknroll-one-regular text-center mt-3">
                Add To Cart
              </h1>
            </div>
            {cart.map((item, index) => {
              return (
                <div
                  className="container-fluid d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <div className="AddCart">
                    <h6>{item.name}</h6>
                    <div className="price d-flex">
                      <p>{item.quantity} x</p>
                      <p className="ps-2">@{item.price}</p>
                      <p className="ps-2">={item.quantity * item.price}</p>
                    </div>
                  </div>
                  <div>
                    <i
                      className="fa-solid fa-xmark pb-3 rounded-circle"
                      onClick={() => handleDelete(item._id)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              );
            })}

            <div className="total d-flex justify-content-between p-2">
              <p>Order Total</p>
              <h3>{orderTotal}</h3>
            </div>

            <div
              className="img-cart text-center p-3 m-2 rounded"
              style={{ backgroundColor: "hsl(14, 52%, 74%)" }}
            >
              <img src={Tree} alt="Carbon Neutral Delivery" />
              <p>
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
