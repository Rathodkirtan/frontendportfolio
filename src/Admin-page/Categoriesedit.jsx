import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Categoriesedit() {
  const location = useLocation();
  const navigate=useNavigate();
  const [navdata, setnavdata] = useState(location.state);
  console.log(navdata);

  const changehandler = (e) => {
    setnavdata({ ...navdata, [e.target.name]: e.target.value });
  };

  const cartupdate = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/cartupdate", navdata)
      .then((res) => {
        navigate("/admin/cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-content-center flex-column">
      <h2>Edit Categories</h2>
      <form action="localhost:8000/api/cartupdate" method="post" encType="multipart/form-data" onSubmit={cartupdate}>
        <div className="mb-3">
          <input className="form-control" type="file" id="formFile" name="avatar"/>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="name"
            value={navdata.name}
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
            name="category"
            value={navdata.category}
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
            value={navdata.price}
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

export default Categoriesedit;
