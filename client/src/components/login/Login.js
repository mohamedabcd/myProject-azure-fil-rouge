import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext  } from "../../helpers/AuthContext.js";


function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // a changer si cela ne marche pas
  // const {setAuthState } = useContext(AuthContext);
  const [authState, setAuthState] = useState(false);
  

  let history = useNavigate();

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().min(3).max(15).required("You must input a name"),
  //   password: Yup.string().min(4).max(20).required(),

  // });

  const login = () => {
    const data = { name: name, password: password };
    axios.post("http://localhost:5001/auth/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      }else if(name === "admin3" ){
        localStorage.setItem("accessToken", response.data);
        setAuthState(true)
        history("/admin")
      }else{
        localStorage.setItem("accessToken", response.data);
        setAuthState(true)
        history("/")
      }
      
    });
  };
  return (
    <div>
      <nav>
        <h4>Login</h4>
        <ul>
          <li>
            <Link to="/">
              <a href="home">Home</a>
            </Link>
          </li>
          {/* <li>
            <Link to="/register">
              <a href="register">register</a>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <a href="admin">Admin</a>
            </Link>

          </li> */}
          
        </ul>
      </nav>
      <div className="form-container">
        <label>Name</label>

        <input
          className="form-control"
          
          placeholder="your name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Password</label>

        <input
          className="form-control"
          type="password"
          
          placeholder="your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
