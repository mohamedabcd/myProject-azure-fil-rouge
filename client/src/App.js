import React from "react";
import { BrowserRouter as Router,Routes,Route,useRoutes} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.js";
import Authpage from "./components/authPage.js/authPage";
import Register from "./components/register/register";

function App() {
  return (
    <div className="container-lg ">
      <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Authpage />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
