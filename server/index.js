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
app.use(cors());

mongoose.connect(process.env.MONGO).then(() => {   
    console.log("database connected");
}).catch((err) => {
    console.log(err);
});


const Port = process.env.PORT || 5000;

app.use('/api/auth', AuthRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internale Server Error";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
app.listen(Port, () => {
    console.log(`connected to port n° ${Port}`);
});


