import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Student from './components/showStudent/showStudent.js';
import CreateStudent from './components/createStudent/createStudent.js'
import './App.css';
import makeStyles from './styles';



function App() {
  const classes = makeStyles();
  return (
    <div className="App">
      <Container maxWidth="xl" className={classes.container}>
        <AppBar className={classes.appbar} position="static" color="inherit"  >
          <Typography className={classes.heading} variant="h2" align="center">
            Dashboard Students
          </Typography>
        </AppBar>
        <Grow in>
          <Container >
            <Grid container justifyContent="space-between" alignItems="center" >
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={11} sm={3} >
              <AppBar className={classes.appBarInput} position="static" color="inherit">
                  <CreateStudent/>
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>

    </div>
  );
}

export default App;


