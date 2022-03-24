import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/styles/home.css";

function authPage() {
  const [listOfStudents, setlistOfStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/students").then((response) => {
      setlistOfStudents(response.data);
    });
  }, []);
  return (
    <div className="container mt-4">
      <nav>
        <h4>Home Auth</h4>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <Link to="/">
              <a href="login">Login</a>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <a href="register">Register</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-4">
        
        <div>
          {listOfStudents.map((value, key) => {
            return (
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{value.name}</h5>
                  <p class="card-text">{value.description}</p>
                  <p>{value.grade}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default authPage;
