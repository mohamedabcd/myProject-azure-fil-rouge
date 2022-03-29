import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.js";
import Register from "./components/register/register";
import Login from "./components/login/login";
import User from "./components/user/user";
import Home from "./components/home/home.js";
import CreatePost from "./components/createPost/createPost.js";
import ButtonLoginOut from "./components/buttonLoginOut/buttonLoginOut.js";
import { AuthContext } from "./helpers/AuthContext.js";
import axios from 'axios';



function App() {

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5001/auth/auth",{
      headers: {
        accessToken: localStorage.getItem("accessToken")
      }
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false)
      } else {
         setAuthState(true);
      }
    })
     
    
  }, [])

  const logout = () => {
    sessionStorage.removeItem("acessToken");
    setAuthState(false)
  }
  return (
    <div className="container-lg ">
      
      <AuthContext.Provider value={{authState, setAuthState}}>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
           
        {/* {!authState ? (
        
          <> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* </> */}
        {/* // ) :( 
          
        //    )} */}
          <Route path="/user/:id" element={<User />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
