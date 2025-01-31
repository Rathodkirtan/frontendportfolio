import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PersonalProfile() {
  const navigate=useNavigate();
const [user, setuser] = useState({})
  useEffect(() => {
    const usergetdata = async () => {
      await axios
        .get("http://localhost:8000/api/admin/adminprofile",{ headers: { Authorization: localStorage.getItem("token") }})
        .then((res) => {
          setuser(res.data);
          console.log(res.data)
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
  return (
    <div className="container mt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <div className="card  ">
                        <div className="card-body text-center">
                            <h2 className="card-title mb-3">Admin Profile</h2>
                            <div className="mb-4">
                                <img
                                    src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain"
                                    alt="Profile"
                                    className="rounded-circle"
                                    style={{ width: '120px', height: '120px' }}
                                />
                            </div>
                            <h4 className="card-subtitle mb-2 text-dark">{user.fullname}</h4>
                            <p className="text-muted">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
