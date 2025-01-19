import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo Connect laew naja');
    } catch (error) {
        console.error('Error Connecting to MongoDB', error.message)
    }
};

export default connectDB;