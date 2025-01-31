import React, { useState } from "react";
import styles from "../style/Login.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const handleralter = () => {
  Swal.fire("Success!","user register successfully","success");
};

const erroralter=()=>{
  Swal.fire("Error!","something went wrong","error");
}
function Registration() {
  const [form, setform] = useState({});
  const navigate = useNavigate();

  const changehandle = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const sendhandler = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post("http://localhost:8000/reg", form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        handleralter();
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        erroralter();
      });
    } catch (error) {
      console.log(error)
    }
   
  };
  return (
    <div className="container-fluid mb-3">
      <div className="row w-100">
        <div
          className={`${styles.img} d-flex align-items-center text-white fs-1 ps-4 col-12 rocknroll-one-regular`}
        >
          sign up
        </div>

        <div className="m-auto text-center col-12 ">
          <form
            className="form mb-5 mt-5 light-red"
            action="http://localhost:8000/reg"
            method="post"
            onSubmit={sendhandler}
          >
            <div className="form__group ">
              <input
                type="text"
                placeholder="Full Name"
                className=" m-"
                name="fullname"
                onChange={changehandle}
                required
              />
            </div>
            <div className="form__group ">
              <input
                type="email"
                placeholder="Email"
                className=" m-4"
                name="email"
                onChange={changehandle}
                required
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={changehandle}
                className=""
              />
            </div>
            <button
              // type=""
              className="addTOCart__btn btn btn-danger rouded mt-3 mb-0 text-white px-4"
            >
              Sign up
            </button>
          </form>
          <NavLink to="/login">Already have an account? Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Registration;
