import React, {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function user() {

    let {id} = useParams();

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
      <h1>{id}</h1>
      </div>
    
  </div>
  )
}

export default user