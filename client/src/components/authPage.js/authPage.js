import React from "react";
import '../../assets/styles/authPage.css'

function authPage() {
  // const classes = makeStyles();
  return (
    <div className="container mt-4">
      <nav>
        <h4>Home Auth</h4>
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
      <div className="container mt-4">
        <div className="jumbotron">
          <h1 className="display-4">Dashboard Student</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default authPage;
