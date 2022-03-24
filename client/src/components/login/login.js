import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = () => {
    axios.post("http://localhost:5002/users/login", {
        name: name,
        password: password,
      })
      .then(() => {
        alert("User Logged");

        // setShowAlert(true);
      });
  };
  return (
    <div className="container mt-4">
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
      <div className="container mt-12">
        <div className="card">
          <div className="card-header">Login Form</div>
          <div className="card-body">
            <form className="form-content-right">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="enter your name"
                />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={userLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
