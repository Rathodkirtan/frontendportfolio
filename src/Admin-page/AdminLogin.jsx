// Login.js:
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const handleralter = () => {
  Swal.fire("Success!","Admin Login successfully","success");
};

const erroralter=()=>{
  Swal.fire("Error!","something went wrong","error");
}

function AdminLogin() {
  const [data, setdata] = useState({})
  const navigate=useNavigate();

  const handlechange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit =async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8000/adminlogin",data).then((data)=>{
      console.log(data.data);
      localStorage.setItem("token", data.data.token);
      handleralter();
      navigate('/admin/dashbord')
    }).catch((err)=>{
      erroralter();
    })
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="text-center">
        <i className="fa-solid fa-user-tie text-center border p-3 rounded-pill border-dark" style={{color:"black",fontSize:"90px"}}></i>
          <h2 className="text-center mb-4">Admin Login</h2>
          <Form action="http://localhost:8000/adminlogin" onSubmit={handleSubmit} className="text-start"  method="post">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handlechange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handlechange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default AdminLogin;
