// src/pages/Booking.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

const Booking = () => {
    const handleBookingSubmit = (bookingData) => {
        // ประมวลผลข้อมูลการจองที่ได้รับมา เช่น ส่งไปยัง API
        console.log('Booking Data:', bookingData);
        // คุณสามารถทำการเรียก API ที่นี่เพื่อสร้างการจอง
    };

    return (
        <div>
            <Navbar />
            <h1>Book Your Room</h1>
            <BookingForm onSubmit={handleBookingSubmit} />
            <Footer />
        </div>
    );
};

export default Booking;
