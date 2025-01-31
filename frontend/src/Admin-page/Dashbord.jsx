import React, { useState, useEffect } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  const [order, setorder] = useState("");
  const [categories, setcategories] = useState("");
  const [custmber, setcustmber] = useState("");
  const [franchise, setfranchise] = useState("");
  const [contact, setcontact] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("http://localhost:8000/cust/api/fetchorder", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data.length);
          setorder(res.data.length);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            navigate("/admin");
          }
        });
    };
    fetchdata();
  }, []);


  useEffect(() => {
    const getfranchise = async () => {
      await axios
        .get("http://localhost:8000/api/admin/franchise",{ headers: { Authorization: localStorage.getItem("token") }})
        .then((data) => {
            setfranchise(data.data.length);
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status==401){
            navigate('/admin')
          }
        });
    };
    getfranchise();
  });

  useEffect(() => {
    const contactfun = async () => {
      await axios
        .get("http://localhost:8000/api/admin/contact", { headers: { Authorization: localStorage.getItem("token") }})
        .then((data) => {
            setcontact(data.data.length );
        //   setbool(!bool)
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status==401){
            navigate('/admin')
          }
        });
    };
    contactfun();
  }, []);  

  useEffect(() => {
    const usergetdata = async () => {
      await axios
        .get("http://localhost:8000/api/admin/user",{ headers: { Authorization: localStorage.getItem("token") }})
        .then((res) => {
            setcustmber(res.data.length);
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status==401){
            navigate('/admin')
          }
        });
    };
    usergetdata();
  }, []);

  useEffect(() => {
    const getcartitem = async () => {
      await axios
        .get("http://localhost:8000/api/getitem",{ headers: { Authorization: localStorage.getItem("token") }})
        .then((res) => {
            setcategories(res.data.length);
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status==401){
            navigate('/admin')
          }
        });
    };
    getcartitem();
  }, []);
  return (
    <main className="main-contain">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Order</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{order}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{categories}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{custmber}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Contact</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{contact}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Franchise</h3>
            <i
              className="fa-solid fa-franc-sign"
              style={{ color: "white", fontSize: "25px" }}
            ></i>
          </div>
          <h1>{franchise}</h1>
        </div>
      </div>
    </main>
  );
}

export default Dashbord;
