import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [roomId, setRoomId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // สร้างวัตถุข้อมูลการจอง
        const bookingData = {
            roomId,
            checkInDate,
            checkOutDate,
            guests,
        };
        // เรียกฟังก์ชัน onSubmit ที่ส่งเข้ามาเพื่อจัดการกับข้อมูลการจอง
        onSubmit(bookingData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="roomId">Room ID:</label>
                <input
                    type="text"
                    id="roomId"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="checkInDate">Check-in Date:</label>
                <input
                    type="date"
                    id="checkInDate"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="checkOutDate">Check-out Date:</label>
                <input
                    type="date"
                    id="checkOutDate"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    required
                />
            </div>
            <button type="submit">Confirm Booking</button>
        </form>
    );
};

export default BookingForm;
