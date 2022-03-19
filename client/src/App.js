import React from "react";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.js";
import Authpage from "./components/authPage.js/authPage";
import Register from "./components/register/register";

function App() {
  return (
    <div className="container-lg ">
      <Routes>
        <Route exact path="/" element={<Authpage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
