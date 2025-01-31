import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Showorder() {
  const [user, setuser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("http://localhost:8000/cust/api/customerorder", {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data);
          setuser(res.data.orderdata);
          // handleralter();
          // navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchdata();
  }, []);
  console.log(user);
  return (
    <>
      <div className="container mb-5">
        <h3 className="rocknroll-one-regular red mt-4 text-center">My order</h3>
        {
          user.length==0?<div className="d-flex justify-content-center mt-5">
          <img src="https://th.bing.com/th/id/R.e22c28cbc35744d49ce8015e5088e089?rik=AeI7B2BHB%2fLr7A&riu=http%3a%2f%2fharp.andrewzajac.ca%2fsites%2fharp.andrewzajac.ca%2ffiles%2forder1.png&ehk=16C%2fwZVuNezmW7oZdtzcaWtB%2b0wac06jUA2SLMivOME%3d&risl=&pid=ImgRaw&r=0" style={{width:"350px"}}  alt="order" />
          </div>: user.map((product, index) => (
          <div className="" key={index}>
            <div className="d-md-flex mt-3 shadow justify-sm-content-center ">
              <img
                src={"http://localhost:8000/uploads/" + product.image.moblie}
                className="card-img-top rounded"
                alt={product.name}
                style={{ width: "200px", objectFit: "cover" }}
              />
              <div className="ms-4 d-flex justify-content-center">
                <div>
                  <h5 className="">{product.name}</h5>
                  <p className="">Category: {product.category}</p>
                </div>
                <div>
                  <p className="">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        
       
       
      </div>
    </>
  );
}

export default Showorder;
