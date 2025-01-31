import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const handleralter = () => {
  Swal.fire("Success!","Thankyou for contacting us.We will get back to you shortly","success");
};

const erroralter=()=>{
  Swal.fire("Error!","something went wrong","error");
}

function Contact() {
  const [contect, setcontect] = useState({});
  const navigate = useNavigate();

  const changehandler = (e) => {
    setcontect({ ...contect, [e.target.name]: e.target.value });
  };

  const contacthandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/contact", contect)
      .then((res) => {
        console.log(res.data);
        handleralter();
        navigate("/");
      })
      .catch((err) => {
        erroralter();
        console.log(err);
      });
  };
  console.log(contect);
  return (
    <div className="mt-5 text-center container mb-5 ">
      <h4 className="rocknroll-one-regular red">Contact Us</h4>
      {/* <div id="form-status" className="form-submit-success mt-2"></div> */}
      <form
        className="row site-forms mt-5 mb-0"
        id="contact_form"
        onSubmit={contacthandler}
        action="localhost:8000/api/contact"
        method="post"
      >
        <div className="col-xl-6 col-12">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              id="first_name"
              className="form-control mb-4"
              onChange={changehandler}
              name="name"
              required
            />
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              id="last_name"
              className="form-control mb-4"
              onChange={changehandler}
              name="lastname"
              required
            />
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="form-group">
            <input
              type="text"
              placeholder="Contact Number"
              id="contact_no"
              className="form-control mb-4"
              onChange={changehandler}
              name="contact"
              required
            />
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="form-group">
            <input
              type="text"
              placeholder="Email id"
              id="email_id"
              className="form-control mb-4"
              onChange={changehandler}
              name="email"
              required
            />
            <span id="email_id-info" className="info"></span>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-0">
            <textarea
              className="form-control mb-4"
              id="message"
              placeholder="Write your messages.."
              onChange={changehandler}
              name="content"
              rows={5}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group text-center">
            <button
              type="submit"
              name="submit"
              className="btnAction btn btn-danger"
              // onClick={contacthandler}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
