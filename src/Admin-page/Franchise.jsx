import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Franchise() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getfranchise = async () => {
      await axios
        .get("http://localhost:8000/api/admin/franchise", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((data) => {
          setdata(data.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            navigate("/admin");
          }
        });
    };
    getfranchise();
  });
  const deletefranchise = async (id) => {
    await axios
      .get(`http://localhost:8000/api/francisedelete/${id}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">City</th>
          <th scope="col">Contact Name</th>
          <th scope="col">Email id</th>
          <th scope="col">Message</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dt, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{dt.name}</td>
              <td>{dt.lastname}</td>
              <td>{dt.city}</td>
              <td>{dt.contact}</td>
              <td>{dt.email}</td>
              <td>{dt.content}</td>
              <td style={{ cursor: "pointer" }}>
                <NavLink to="/admin/franchiseEdit" state={dt}>
                  Edit
                </NavLink>
              </td>
              <td
                onClick={() => deletefranchise(dt._id)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Franchise;
