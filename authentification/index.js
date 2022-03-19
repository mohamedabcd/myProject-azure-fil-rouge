import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
// import { getStudents } from '../server/controllers/student.js';
import studentRoutes from "../server/routes/student.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({limit: "20mb", extented:true}));
app.use(express.urlencoded({limit: "20mb", extented:true}));

const db = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.PORT,
});
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL connected...");
  }
});

app.post('/users/insert', (req,res) => {

  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const sqlInsert = "INSERT INTO users (name, email, password) VALUES (?, ? , ?)";
  db.query(sqlInsert, [name, email, password], (err, result) => {
    console.log(result);
  });
})

// app.get("/", (req, res) => {
//   const sqlInsert = "INSERT INTO users (name, email, password) VALUES ('farouk', 'f.elayce@live.fr', 1234)";
//   db.query(sqlInsert, (err, result) => {
//   res.send("hello farouk");
//   });
// });

// app.use('/auth', import('./routes/auth'));

app.listen(5002, () => {
  console.log("server started on port 5002");
});

// client.connect();


export default db;