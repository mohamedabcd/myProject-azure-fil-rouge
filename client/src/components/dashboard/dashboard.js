import React from "react";
import { Link } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Student from "../showStudent/showStudent.js";
import CreateStudent from "../createStudent/createStudent.js";
// import '../home/App.css';
import makeStyles from "../../styles";

function Home() {
  const classes = makeStyles();
  return (
    <>
      <div className="container mt-4">
        <nav>
          <h4>Home Auth</h4>
          <ul>
            <li>
              <Link to="/"><a href="home">Home</a></Link>
            </li>
            <li>
              <Link to="/register"><a href="register">Register</a></Link>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mt-4">
        <Container maxWidth="xl" className={classes.container}>
          <AppBar className={classes.appbar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h4" align="center">
              Dashboard Students
            </Typography>
          </AppBar>
          <Grow in>
            <Container>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12} sm={7}>
                  <AppBar
                    className={classes.appBar}
                    position="static"
                    color="inherit"
                  >
                    <Student />
                  </AppBar>
                </Grid>
                <Grid item xs={11} sm={3}>
                  <AppBar
                    className={classes.appBarInput}
                    position="static"
                    color="inherit"
                  >
                    <CreateStudent />
                  </AppBar>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    </>
  );
}

export default Home;
