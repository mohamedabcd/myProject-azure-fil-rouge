import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

dotenv.config();


const app = express();

app.use(cors());

app.use(express.json({limit: "20mb", extented:true}));
app.use(express.urlencoded({limit: "20mb", extented:true}));

app.use('/students', studentRoutes);



const CONNECTION_URL = process.env.MONGO_URI;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log(`Connection is etablished and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


// mongoose.set('useFindAndModify', false);

