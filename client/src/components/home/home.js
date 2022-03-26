import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/home.css";

function authPage() {
  const [listOfStudents, setlistOfStudents] = useState([]);

  let history = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5001/students").then((response) => {
      setlistOfStudents(response.data);
    });
  }, []);
  return (
    <div className="container mt-4">
      <nav>
        <h4>Home</h4>
        <ul>
          <li>
            <Link to="/createpost">
              <a href="createpost">createpost</a>
            </Link>
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
          <li>
            <Link to="/admin">
              <a href="admin">Admin</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-4 ">
        
        <div className="container-user">
          {listOfStudents.map((value, key) => {
            return (
              <div class="card" key={value.id} onClick={() => {history(`/user/${value.id}`)}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868__340.png" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{value.name}</h5>
                  <p class="card-text card-description">{value.description}</p>
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
