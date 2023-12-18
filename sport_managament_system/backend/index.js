import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

// import authRoute from './Routes/authRoute.js';
import coatchRoutes from './Routes/CoatchRoutes.js';
import equipmentRoutes from './Routes/EquipmentRoutes.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: true
}

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // specil if missed this one req.body is empty
app.use(cors(corsOptions));
app.use(express.json());
//app.use('/api/auth', authRoute);
app.use('/api/coatch',coatchRoutes);
app.use('/api/equipment',equipmentRoutes);

app.use(cookieParser);

// app.get('/api', (req, res) => {
//     res.send("Api is working");
// })

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
        console.log(error.message);
    }
}

//middlewares




//routes




app.listen(port, () => {
    connectDB();
    console.log(`App running on ${port}`);
});   