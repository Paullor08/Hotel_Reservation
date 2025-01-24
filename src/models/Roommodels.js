import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({

    roomNumber: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Single' ,'Double' ,'Suite'], //เลือกประเภทห้อง
    },
    capacity: {
        type: Number,
        required: true,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    IsAvaliable: {
        type: Boolean,
        default: true,
    }

});

const Room = mongoose.model('Room' ,roomSchema);

export default Room