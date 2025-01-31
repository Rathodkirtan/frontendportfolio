import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'

function franchiseEdit() {
  const location = useLocation();
  const navigate=useNavigate();
  const [franchisedata, setfranchisedata] = useState(location.state);
  const changehandler = (e) => {
    setfranchisedata({ ...franchisedata, [e.target.name]: e.target.value });
  };

  const franchiseupdate=(e)=>{
    e.preventDefault();

    axios.post('http://localhost:8000/api/franchiseupdate',franchisedata).then((res)=>{
      navigate('/admin/franchise');
    }).catch((err)=>{
      console.log(err)
    })
  }
  console.log(franchisedata);
  return (
    <div className="d-flex justify-content-center flex-column">
      <h2>Franchise</h2>
      <form action="http://localhost:8000/api/franchiseupdate" method="post" onSubmit={franchiseupdate}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="name"
            value={franchisedata.name}
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
            value={franchisedata.lastname}
            onChange={changehandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="City"
            name="city"
            value={franchisedata.city}
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
            value={franchisedata.contact}
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
            value={franchisedata.email}
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
              value={franchisedata.content}
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

export default franchiseEdit;
