import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addcategories() {
  const [cartdata, setcartdata] = useState({});
  const navigate = useNavigate();
  const changehandler = (e) => {
    setcartdata({ ...cartdata, [e.target.name]: e.target.value });
  };

  const fetchcartdata = async (e) => {
    // e.preventDefault();
    await axios
      .post("http://localhost:8000/api/upload", cartdata)
      .then((res) => {
        navigate("/admin/cart");
      })
      .catch((err) => {
        console.log(err);
      }); 
  };
  return (
    <div className="d-flex justify-content-center flex-column">
      <h2>Add Categories</h2>
      <form
        action="http://localhost:8000/api/upload"
        method="post"
        encType="multipart/form-data"
        // onSubmit={fetchcartdata}
      >
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="avatar"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="name"
            // value={franchisedata.name}
            onChange={changehandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Categories"
            name="categories"
            // value={franchisedata.lastname}
            onChange={changehandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
            name="price"
            // value={franchisedata.city}
            onChange={changehandler}
            required
          />
        </div>

        <div className="mb-3">
          <div className="mb-3">
            <button type="" onClick={fetchcartdata} className="btn btn-primary mt-3">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addcategories;
