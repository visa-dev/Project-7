import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './Routes/auth.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: true
}


app.get('/', (req, res) => {
    res.send("Api is working");
})

//databse connection

//mongoose.set('stricQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected");
    } catch (error) {
        console.log("Not Connected");
    }
}

//middlewares

app.use(express.json());
app.use(cookieParser);
app.use(cors(corsOptions));

//routes

app.use('api/auth', authRoute);


app.listen(port, () => {
    connectDB();
    console.log(`App running on ${port}`);
});   