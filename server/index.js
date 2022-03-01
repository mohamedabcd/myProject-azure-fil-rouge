import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "20mb", extented:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extented:true}));

app.use(cors());

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL;

const PORT = process.env.PORT || 5000;

moogoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
})
