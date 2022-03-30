import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import "../../assets/styles/createPost.css";


function CreatePost() {

  let history = useNavigate();

  const initialValues = {
      name: "",
      description: "",
      grade: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("You must input a name"),
    description: Yup.string().required(),
    grade: Yup.string().required(),
  })
  

  const onSubmit = (data) => {
    axios.post("http://localhost:5001/students", data).then((response) => {
      history("/");
    });
  }

  
  return (
    <div>
      <div>
        <nav>
          <h2>Create Post</h2>
          <ul>
            <li>
              <Link to="/">
                <a href="home">Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="createPostPage">
        <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit} 
          validationSchema={validationSchema}
          >
          <Form className="formContainer">
            <label>Name</label>
            <ErrorMessage name="name" component={"span"}/>
            <Field
              autoComplete="off"
              id="name" 
              name="name" 
              placeholder="Ex. John.." />
            <label>Description</label>
            <ErrorMessage name="description" component={"span"}/>
            <Field
              autoComplete="off"
              id="description"
              name="description"
              placeholder="your description"
            />
            <label>Grade</label>
            <ErrorMessage name="grade" component={"span"}/>
            <Field
              autoComplete="off"
              id="grade"
              name="grade"
              placeholder="Your grade: 1sth"
            />
            <button type="submit"> Create Post </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreatePost;
