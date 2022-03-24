import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from 'react-hook-form';
// import TexField from "@material-ui/core/TextField"
// import { yupResolver } from '@hookform/resolvers/yup'
// import { ErrorMessage } from '@hookform/error-message';
// import * as yup from 'yup';
// import Alert from 'react-bootstrap/Alert'
import "../../assets/styles/home.css";

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().min(4).max(15).required(),
//   passwordConfirm: yup.string().oneOf([yup.ref("password"), null])
// })

function register() {
  const {register, handleSubmit, formState: { errors }, watch } = useForm();

 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");

 

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [passwordConfirmErr, setConfirmPasswordErr] = useState({});

  // const [showAlert, setShowAlert] = useState(false);

  const addUser = () => {
    axios.post("http://localhost:5002/users/insert", {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then(() => {
        alert("success insert user");

        // setShowAlert(true);
      });
  };
  const onSubmit = () => {
    data => console.log(data);

  }



  return (
    <div className="container mt-4">
      <nav>
        <h4>Register</h4>
        <ul>
          <li>
            <Link to="/">
              <a href="home">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/login">
            <a href="login">Login</a>
            </Link>

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
            
            <form className="form-content-right" >
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
                <label for="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="enter your email adress"
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  placeholder="enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  
                />
                
              </div>
              <div className="mb-3">
                <label for="passwordConfirm" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="confirm your password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  
                />
                
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={addUser}
                
                
              >
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
