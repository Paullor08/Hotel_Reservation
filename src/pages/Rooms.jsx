import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Rooms = () => {
    return (
        <div>
            <Navbar />
            <h1>Our Rooms</h1>
            <div className="room-listings">
                {/* แสดงรายการห้องพัก */}
                <div className="room-item">
                    <img src="/path/to/image.jpg" alt="Room" />
                    <h3>Room Type</h3>
                    <p>Price: $100 per night</p>
                    <button>Book Now</button>
                </div>
                {/* เพิ่มห้องพักอื่น ๆ */}
            </div>
            <Footer />
        </div>
    );
};

export default Rooms;
