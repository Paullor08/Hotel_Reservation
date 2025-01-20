import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({

    roomNumber: {
        type: String,
        require: true,
        unique: true,
    }


});

const Room = mongoose.model('Room' ,roomSchema)

export default Room