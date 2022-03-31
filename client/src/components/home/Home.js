import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../helpers/AuthContext.js";

import "../../assets/styles/home.css";

function Home() {
  const [listOfStudents, setlistOfStudents] = useState([]);
  const [authState, setAuthState] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5001/students").then((response) => {
      setlistOfStudents(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("acessToken");
    setAuthState(false);
  };

  return (
    <div>
      <nav className="mynav">
        <h4>Home</h4>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <ul>
            {/* !localStorage.getItem("accessToken") &&   a mettre ca devant si cela ne marche pas*/}
            {!authState ? (
              <>
                <li>
                  <Link to="/login">
                    <a href="login">Login</a>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <a href="register">Register</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* <li>
              <Link to="/admin">
                <a href="admin">Admin</a>
              </Link>
            </li> */}

                <li>
                  <Link to="/createpost">
                    <a href="createpost">CreateAPost</a>
                  </Link>
                </li>
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </ul>
        </AuthContext.Provider>
      </nav>
      <div className="container mt-4 ">
        <div className="container-user">
          {listOfStudents.map((value, key) => {
            return (
              <div
                class="card"
                key={value.id}
                onClick={() => {
                  history(`/user/${value.id}`);
                }}
              >
                <img
                  class="card-img-top"
                  src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868__340.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{value.name}</h5>
                  <p class="card-text card-description">{value.description}</p>
                  <p>{value.grade}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
