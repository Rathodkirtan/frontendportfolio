import React, { useState, useEffect } from "react";
import Icon from "../assets/images/icon-add-to-cart.svg";
import Increase from "../assets/images/icon-increment-quantity.svg";
import Decrease from "../assets/images/icon-decrement-quantity.svg";
import Data from "../../data.json";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [AddCart, setAddCart] = useState([]);

  const [data, setdata] = useState([]);
  useEffect(() => {
    const getcartitem = async () => {
      await axios
        .get("http://localhost:8000/api/getitem")
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getcartitem();
  }, []);

  const addList = (productItem) => {
    const existingItem = AddCart.find((item) => item._id === productItem._id);

    if (existingItem) {
      setAddCart(
        AddCart.map((item) =>
          item._id === productItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setAddCart([...AddCart, { ...productItem, quantity: 1, isValid: true }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setAddCart(
      AddCart.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };


  return (
    <div className="container">
      <div className="row d-flex flex-wrap">
        <span className="rounded-circle d-flex justify-content-end position-sticky top-50 end-0 z-1 mb-5">
          <NavLink to="/Addproduct" state={AddCart}>
            <i className="fa-solid fa-cart-shopping fs-2 mt-3 border p-3 rounded-circle text-dark zoom red"></i>
          </NavLink>
        </span>
        <div className="col-12 mt-5">
          <h3 className="text-center rocknroll-one-regular fs-1 mb-5">
            Popular Foods
          </h3>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-between ">
            {data.map((productItem,index) => {
              return (
                <div className="cart" key={index}>
                  <img
                    src={
                      "http://localhost:8000/uploads/" +
                      productItem.image.moblie
                    }
                    alt="img"
                    style={{ width: "240px" }}
                    className="rounded zoom"
                  />
                  <div className="cart-body">
                    {AddCart.some((item) => item._id === productItem._id) ? (
                      <div
                        style={{
                          background: "hsl(14, 86%, 42%)",
                          fontFamily: "Red Hat Text, sans-serif",
                          fontWeight: 500,
                          position: "relative",
                          bottom: "20px",
                          left: "45px",
                          width: "120px",
                          textAlign: "center",
                          height: "32px",
                        }}
                        className="rounded-pill p-1"
                      >
                        <img
                          src={Increase}
                          alt="Increase"
                          className="pe-3"
                          onClick={() => updateQuantity(productItem._id, 1)}
                        />

                        {AddCart.find((item) => item._id === productItem._id)
                          ?.quantity || 1}

                        <img
                          src={Decrease}
                          alt="Decrease"
                          className="ps-3"
                          onClick={() => updateQuantity(productItem._id, -1)}
                        />
                      </div>
                    ) : (
                      <button
                        className="rounded-pill bg-white"
                        style={{
                          borderColor: "hsl(14, 86%, 42%)",
                          fontFamily: "Red Hat Text, sans-serif",
                          fontWeight: 500,
                          position: "relative",
                          bottom: "17px",
                          left: "40px",
                        }}
                        onClick={() => addList(productItem)}
                      >
                        <img src={Icon} alt="Icon" /> Add to Cart
                      </button>
                    )}
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "Red Hat Text, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {productItem.name}
                    </p>
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "Red Hat Text, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {productItem.category}
                    </p>
                    <p
                      style={{
                        fontFamily: "Red Hat Text, sans-serif",
                        fontWeight: 800,
                      }}
                    >
                      $ {productItem.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
