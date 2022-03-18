import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
// import { getStudents } from '../server/controllers/student.js';
import studentRoutes from '../server/routes/student.js';


dotenv.config();

const app = express();

app.use(cors());

const db = mysql.createConnection({
    user : process.env.USER,
    password : process.env.PASSWORD,
    host : process.env.HOST,
    database : process.env.DATABASE,
    port: process.env.PORT

})


db.connect((error) => {
    if(error){
        console.log(error);
    }else {
        console.log("MYSQL connected...");
    }
})

app.get('/register', (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(5001, () => {
    console.log("server started on port 5001");
})

