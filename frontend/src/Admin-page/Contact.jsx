import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import context from '../main.jsx';


function Contact() {
  const [res, setres] = useState([]);
  const [bool, setbool] = useState(false)
  const token=useContext(context)
  const navigate=useNavigate();

  useEffect(() => {
    const contactfun = async () => {
      await axios
        .get("http://localhost:8000/api/admin/contact", { headers: { Authorization: localStorage.getItem("token") }})
        .then((data) => {
          setres(data.data );
          setbool(!bool)
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status==401){
            navigate('/admin')
          }
        });
    };
    contactfun();
  }, []);

  const deletecontact = async (id) => {
    await axios
      .get(`http://localhost:8000/api/contactdelete/${id}`)
      .then((res) => {
        setres(res.data);
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
          <th scope="col">Contact Name</th>
          <th scope="col">Email id</th>
          <th scope="col">Message</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {res.map((dt, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{dt.name}</td>
              <td>{dt.lastname}</td>
              <td>{dt.contact}</td>
              <td>{dt.email}</td>
              <td>{dt.content}</td>
              <td>
                <NavLink to="/admin/contactEdit" state={dt}>
                  Edit
                </NavLink>
              </td>
              <td
                onClick={() => deletecontact(dt._id)}
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

export default Contact;
