import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function ContactEdit() {
  const location=useLocation();
  const navigate=useNavigate();
  const [contactdata,setcontactdata]=useState(location.state);
  const changehandler=(e)=>{
    setcontactdata({...contactdata,[e.target.name]:e.target.value});
  }

  const contactupdate=(e)=>{
    e.preventDefault();

    axios.post('http://localhost:8000/api/contactupdate',contactdata).then((res)=>{
      navigate('/admin/contact');
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="d-flex justify-content-center flex-column">
      <h2>Contact</h2>
      <form
        action="localhost:8000/api/contactupdate"
        method="post"
        onSubmit={contactupdate}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="name"
            value={contactdata.name}
            onChange={changehandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
            name="lastname"
            value={contactdata.lastname}
            onChange={changehandler}
            required
          />
        </div>
   
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Contact Number"
            name="contact"
            value={contactdata.contact}
            onChange={changehandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            name="email"
            value={contactdata.email}
            onChange={changehandler}
            required
          />
          <div className="mb-3">
            <textarea
              className="form-control mt-3"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Write your messages..."
              name="content"
              value={contactdata.content}
              onChange={changehandler}
              required
            ></textarea>

            <button type="submit" className="btn btn-primary mt-3">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactEdit;
