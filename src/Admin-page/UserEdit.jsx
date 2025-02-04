import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function UserEdit() {
  const location=useLocation();
  const navigate=useNavigate();
  const [userdata,setuserdata]=useState(location.state)
  const changehandler=(e)=>{
    setuserdata({...userdata,[e.target.name]:e.target.value})
  }

  const userUpdate=(e)=>{
    e.preventDefault();

    axios.post('http://localhost:8000/api/userupdate',userdata).then((res)=>{
      navigate('/admin/user');
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="d-flex justify-content-center flex-column">
      <h2>User</h2>
      <form
        action="localhost:8000/api/userupdate"
        method="post"
        onSubmit={userUpdate}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Fullname"
            name="fullname"
            value={userdata.fullname}
            onChange={changehandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="email"
            name="email"
            value={userdata.email}
            onChange={changehandler}
            required
          />
        </div>

       
        <div className="mb-3">
          <div className="mb-3">
            

            <button type="submit" className="btn btn-primary mt-3">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
