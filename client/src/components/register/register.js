import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../assets/styles/authPage.css";

function register() {
  
  
  const  [name, setName] = useState('');
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');


  const addUser = () => {
    axios.post('http://localhost:5002/users/insert', { 
      name:name, 
      email:email, 
      password:password 
    }).then(() => {
      alert("success insert user")
    })
  }

  return (
    <div className="container mt-4">
      <nav>
        <h4>Register</h4>
        <ul>
          <li>
            <Link to="/"><a href="home">Home</a></Link>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
          <li>
            <Link to="/admin"><a href="admin">Admin</a></Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-12">
        <div className="card">
          <div className="card-header">Register Form</div>
          <div className="card-body">
            <form >
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={addUser}>
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
