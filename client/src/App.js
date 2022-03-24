import React from "react";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.js";
import Register from "./components/register/register";
import Login from "./components/login/login"
import User from "./components/user/user"
import Home from "./components/home/home.js";


function App() {
  return (
    <div className="container-lg ">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/admin" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
