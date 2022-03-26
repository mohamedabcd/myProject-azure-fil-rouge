import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/styles/user.css";

function user() {
  let { id } = useParams();
  const [studentObject, setSudentObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5001/students/byid/${id}`).then((response) => {
      setSudentObject(response.data);
    });
  }),
    [];

  return (
    <div className="container mt-12">
      <nav>
        <h4>Login</h4>
        <ul>
          <li>
            <Link to="/">
              <a href="home">Home</a>
            </Link>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
          <li>
            <Link to="/admin">
              <a href="admin">Admin</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="postPage">
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868__340.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{studentObject.name}</h5>
            <p className="card-text card-description">
              {studentObject.description}
            </p>
            <p>{studentObject.grade}</p>
          </div>
        </div>
        <div className="container-right"></div>
        <h4>comment section</h4>
      </div>
    </div>
  );
}

export default user;
