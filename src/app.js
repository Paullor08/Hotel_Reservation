import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
dotenv.config();


const app = express();
connectDB();





const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});