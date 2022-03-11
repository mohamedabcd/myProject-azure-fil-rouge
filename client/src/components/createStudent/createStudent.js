import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import makeStyles from "../../styles";
import { Typography } from "@material-ui/core";

import axios from "axios";

export default function CreateStudent() {
  const classes = makeStyles();

  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = () => {
    axios.post("http://localhost:5000/students", student).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
        className={classes.form}
      >
         <Typography className={classes.heading} variant="h6" align="center">
            Create Student
          </Typography>
        <form className={classes.root} noValidate autocmplte="off">
         
          <TextField
            id="outlined-basic"
            label="Registeration N°"
            variant="outlined"
            value={student.regNo}
            onChange={(event) => {
              setStudent({ ...student, regNo: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={student.studentName}
            onChange={(event) => {
              setStudent({ ...student, studentName: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Grade"
            variant="outlined"
            value={student.grade}
            onChange={(event) => {
              setStudent({ ...student, grade: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Section"
            variant="outlined"
            value={student.section}
            onChange={(event) => {
              setStudent({ ...student, section: event.target.value });
            }}
          />

          <Button variant="contained" onClick={createStudent}>
            create
          </Button>
        </form>
      </Box>
    </>
  );
}
