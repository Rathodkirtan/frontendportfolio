import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function OrderEdit() {
  const location = useLocation();
  const navigate=useNavigate();
  const [data, setdata] = useState(location.state || {}); 

  const changehandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const adddate = (e) => {
    e.preventDefault(); 
    axios
      .post("http://localhost:8000/cust/api/adddate", data)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/order")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h4 className="mt-5">Customer Details</h4>
        <table className="table-primary table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Contact</th>
              <th scope="col">Order Date</th>
              <th scope="col">Address</th>
              <th scope="col">Payment</th>
              <th scope="col">Pincode</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.orderid}</td>
              <td>{data.name}</td>
              <td>{data.city}</td>
              <td>{data.contact}</td>
              <td>{data.orderdate}</td>
              <td>{data.address}</td>
              <td>{data.payment}</td>
              <td>{data.pincode}</td>
              <td>{data.state}</td>
            </tr>
          </tbody>
        </table>
        <h4>Order Items</h4>
        {data.orderproduct?.map((item, index) => (
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
          </div>
        ))}

        <div className="total d-flex justify-content-start p-2">
          <h5>Order Total:</h5>
          <h5 className="ms-2">{data.total}</h5>
        </div>

        <form onSubmit={adddate}>
          <div className="mb-3">
            <label htmlFor="deliveryDate" className="form-label">
              Delivery Date*
            </label>
            <input
              type="date"
              className="form-control w-50"
              id="deliveryDate"
              name="date"
              onChange={changehandler}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default OrderEdit;
