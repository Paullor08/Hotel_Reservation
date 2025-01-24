import express from 'express';
import Booking from '../models/Bookingmodels.js';

const router = express.Router();

export const createBooking = async (req, res) => {
    const { roomId, userId, checkInDate, checkOutDate } = req.body

    try {

        const room = await Roomm.findoneById(roomId);
        if (!room || !room.IsAvaliable) {
            return res.status(400).json({ message: 'Room is not available' });
        }

        const existingBooking = await Booking.findOne({
            roomId,
            $or: [

                { checkInDate: { $lte: checkOutDate, $gte:checkInDate } },
                { checkOutDate: { $lte: checkOutDate, $gte:checkInDat } },

            ]
        });

        if (existingBooking) {
            return res.status(400).json({ message: 'Room is already booked for the selected dates' });
        }

        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json(booking);
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
