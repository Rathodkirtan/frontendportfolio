import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const handleralter = () => {
  Swal.fire("OTP sent successfully");
};

const successalter = () => {
  Swal.fire("Success!","password update successfully","success");
};

const erroralter=()=>{
  Swal.fire("Error!","something went wrong","error");
}

function Fogetpassword() {
  const [data, setdata] = useState({});
  const [bool, setbool] = useState(false);
  const [otp, setotp] = useState("");
  const [verify, setverify] = useState({});
  const [checkotp, setcheckotp] = useState("")
  const navigate = useNavigate();

  const changehandler = (e) => {
    setdata({ [e.target.name]: e.target.value });
  };

  const changeotp = async (e) => {
    setverify({
      ...verify,
      email: data.email,
      passotp: otp,
      [e.target.name]: e.target.value,
    });
  };
  const verifyotp = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/otp/verifyotp", verify)
      .then((res) => {
        console.log(res.data);
        successalter();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        erroralter();
      });
  };

  const sendotp = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/otp/sendotp", data)
      .then((res) => {
        console.log(res.data);
        setotp(res.data.otp);
        setbool(!bool);
        handleralter()
        navigate("/forgetpassword");
      })
      .catch((err) => {
        console.log(err);
        erroralter();
      });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <form
        action={
          bool
            ? "http://localhost:8000/api/otp/verifyotp"
            : "http://localhost:8000/api/otp/sendotp"
        }
        className="border p-4 shadow-sm rounded"
        onSubmit={bool ? verifyotp : sendotp}
        method="post"
      >
        <h4 className="mb-3">Forgot Password</h4>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            // id="first_name"
            className="form-control mb-4 "
            name="email"
            onChange={changehandler}
            required
          />
        </div>
        {bool && (
          <div>
            <div className="form-group">
              <label htmlFor="">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                id="first_name"
                className="form-control mb-4 "
                name="otp"
                onChange={changeotp}
                required
              />
            </div>
            <div>{checkotp}</div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter New Password"
                className="form-control mb-4 "
                name="password"
                onChange={changeotp}
                required
              />
            </div>
          </div>
        )}
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            {" "}
            {bool ? "verify OTP" : "Send OTP"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Fogetpassword;
