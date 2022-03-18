import React from "react";
import "../../assets/styles/authPage.css";

function register() {
  // const classNamees = makeStyles();
  return (
    <div className="container mt-4">
      <nav>
        <h4>Register</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
      <div className="container mt-12">
        <div className="card">
          <div className="card-header">Register Form</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
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
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Register User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
