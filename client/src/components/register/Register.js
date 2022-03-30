import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../../assets/styles/register.css";

function register() {
  const initialValues = {
    name: "",
    password: "",
    isAdmin: false
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required("You must input a name"),
    password: Yup.string().min(4).max(20).required(),
    
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:5001/auth", data).then(() => {
      console.log(data);
    })
  };

  return (
    <div>
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
      <div>
        <div className="createPostPage">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="formContainer">
              <label>Name</label>
              <ErrorMessage name="name" component={"span"} />
              <Field
                autoComplete="off"
                id="name"
                name="name"
                placeholder="Ex. John.."
              />
              <label>Password</label>
              <ErrorMessage name="password" component={"span"} />
              <Field
                autoComplete="off"
                type="password"
                id="password"
                name="password"
                placeholder="your password"
              />

              <button type="submit"> Register </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default register;
