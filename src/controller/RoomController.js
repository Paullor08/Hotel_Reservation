import express from 'express';
import Booking from './Bookingmodels.js'; // เปลี่ยนเส้นทางตามโครงสร้างโปรเจกต์ของคุณ
import Room from './Roommodels.js';

const router = express.Router();

// เส้นทางสำหรับการสร้างการจองใหม่
router.post('/api/bookings', async (req, res) => {
    const { roomId, userId, checkInDate, checkOutDate } = req.body;

    try {
        // ตรวจสอบว่าห้องว่างอยู่หรือไม่
        const room = await Room.findById(roomId);
        if (!room || !room.IsAvaliable) {
            return res.status(400).json({ message: 'Room is not available' });
        }

        // ตรวจสอบว่ามีการจองในช่วงวันที่ที่เลือกหรือไม่
        const existingBooking = await Booking.findOne({
            roomId,
            $or: [
                { checkInDate: { $lte: checkOutDate, $gte: checkInDate } },
                { checkOutDate: { $gte: checkInDate, $lte: checkOutDate } }
            ]
        });

        if (existingBooking) {
            return res.status(400).json({ message: 'Room is already booked for the selected dates' });
        }

        // หากห้องว่างและไม่มีการจองในช่วงเวลาที่เลือก ให้สร้างการจองใหม่
        const booking = new Booking(req.body);
        await booking.save();

        // อัปเดตสถานะห้องให้ไม่ว่าง
        room.IsAvaliable = false;
        await room.save();

        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
