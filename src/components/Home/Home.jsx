import React from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate สำหรับการนำทาง
import DeluxeRoom from '../../assets/DeluxeRoom.jpg';
import DuoRoom from '../../assets/DuoRoom.jpg';
import SingleRoom from '../../assets/SingleRoom.jpg';
import './Home.css'; // นำเข้าไฟล์ CSS

export default function HomeComponent() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const handleBookNow = () => {
        navigate('/rooms'); // นำผู้ใช้ไปยังหน้าห้องพักเมื่อคลิกปุ่ม "Book Now"
    };

    return (
        <div className='container'>
            <header className="hero">
                <h1>Welcome to Our Hotel</h1>
                <p>Your comfort is our priority</p>
                <button onClick={handleBookNow}>
                    Book Now
                </button>
            </header>
            <section className="featured-rooms">
                <h2>Featured Rooms</h2>
                <div className="room-grid">
                    <div className="room-card-DeluxeRoom">
                        <img className='DeluxeRoom' src={DeluxeRoom} alt="Deluxe Room" />
                        <h3>Deluxe Room</h3>
                        <p>Price: $150 per night</p>
                        <button onClick={handleBookNow} className="view-details-button">
                            View Details
                        </button>
                    </div>

                    <div className="room-card-DuoRoom">
                        <img className='DuoRoom' src={DuoRoom} alt="Duo Room" />
                        <h3>Duo Room</h3>
                        <p>Price: $75 per night</p>
                        <button onClick={handleBookNow} className="view-details-button">
                            View Details
                        </button>
                    </div>

                    <div className="room-card-SingleRoom">
                        <img className='SingleRoom' src={SingleRoom} alt="Single Room" />
                        <h3>Single Room</h3>
                        <p>Price: $20 per night</p>
                        <button onClick={handleBookNow} className="view-details-button">
                            View Details
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
