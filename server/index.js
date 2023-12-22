import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./routes/authRoutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();
app.use(cookieParser());
app.use(express.json());
dotenv.config();
app.use(cors(
 {   credentials: true,
    origin: ' http://127.0.0.1:5173',}
));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', ' http://127.0.0.1:5173');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
const Port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO).then(() => {   
    console.log("database connected");
}).catch((err) => {
    console.log(err);
});




app.use('/api/auth', AuthRouter);


app.listen(Port, () => {
    console.log(`connected to port n° ${Port}`);
});


