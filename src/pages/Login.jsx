import React, { useState } from "react";
import styles from "../style/Login.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const handleralter = () => {
  Swal.fire("Success!","user Login successfully","success");
};

const erroralter=()=>{
  Swal.fire("Error!","something went wrong","error");
}

function Login() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const changelogin = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const sendlogin = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post("http://localhost:8000/login", form);
      console.log("Response data:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/");
        handleralter();
      } else {
        console.error("Token not received");
        alert("Login failed. Please try again.");
      }
    } catch (err) {
      // console.error("Error during login:", err);
      erroralter();
    }
  };

  return (
    <>
      <div className="container-fluid mb-3">
        <div className="row w-100">
          <div
            className={`${styles.img} d-flex align-items-center text-white fs-1 ps-4 col-12 rocknroll-one-regular`}
          >
            Login
          </div>

          <div className="m-auto text-center col-12">
            <form
              className="form mb-5 mt-5 light-red"
              onSubmit={sendlogin} 
            >
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  className="m-4"
                  name="email"
                  onChange={changelogin}
                  required
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={changelogin}
                  className=""
                  required
                />
              </div>
              <div className="me-5">
                <NavLink to="/forgetpassword" className="me-4">Forget Password</NavLink>
              </div>
              <button
                type="submit"
                className="addTOCart__btn btn btn-danger rounded mt-3 mb-0 text-white px-4"
              >
                Login
              </button>
            </form>

            <NavLink to="/registration">
              Don't have an account? Create an account
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
