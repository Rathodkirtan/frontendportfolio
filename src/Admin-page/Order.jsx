import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Order() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("http://localhost:8000/cust/api/fetchorder", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            navigate("/admin");
          }
        });
    };
    fetchdata();
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order Id</th>
            <th scope="col">Payment</th>
            <th scope="col">Order date</th>
            <th scope="col">Delivery date</th>
            <th scope="col">Total</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.orderid}</td>
                <td>{ele.payment}</td>
                <td>{ele.orderdate}</td>
                <td>{ele.deliverydate}</td>
                <td>{ele.total}</td>
                <td>
                  <NavLink to="/admin/orderEdit" state={ele}>
                    Edit
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Order;
