import mongoose from 'mongoose';
import Room from './Roommodels.js';

const bookingSchema = new mongoose.Schema({

    roomId: { 
        type: mongoose.Schema.Types.ObjectId, // เชื่อมโยงกับห้องพักที่ถูกจอง
        ref:"Room",
        required: true,
    },

    userId: { 
        type: mongoose.Schema.Types.ObjectId, // เชื่อมโยงกับผู้ใช้ที่ทำการจอง
        ref:"User",
        required: true,
    },

    checkInDate: {
        type: Date,
        required: true,
    },

    checkOutDate: {
        type: Date,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ['confirmed', 'canceled', 'completed'],
        default: 'comfirmed',
    },
    
}, { timestamps:true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;