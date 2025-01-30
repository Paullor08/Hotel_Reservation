import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import BookingRouter from './routes/BookingRoutes.js';
import AuthRouter from './routes/authRoutes.js';
import RoomRouter from './routes/RoomRoutes.js';
import cors from 'cors'


dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api' ,BookingRouter);
app.use('/api' ,AuthRouter);
app.use('/api/rooms',RoomRouter);




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});