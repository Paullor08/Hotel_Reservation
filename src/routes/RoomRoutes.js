import express from 'express';
import Room from '../models/Roommodels.js'; // เปลี่ยนเส้นทางตามโครงสร้างโปรเจกต์ของคุณ

const router = express.Router();
const RoomRouter = router;

// เส้นทางสำหรับเพิ่มห้องพักใหม่
router.post('/', async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// เส้นทางสำหรับดึงข้อมูลห้องพักทั้งหมด
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// เส้นทางสำหรับดึงข้อมูลห้องพักตาม ID
router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// เส้นทางสำหรับอัปเดตข้อมูลห้องพัก
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.json(room);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// เส้นทางสำหรับลบห้องพัก
router.delete('/:id', async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default RoomRouter;
