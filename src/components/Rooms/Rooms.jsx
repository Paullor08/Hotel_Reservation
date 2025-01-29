import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeluxeRoom from '../../assets/DeluxeRoom.jpg';
import DuoRoom from '../../assets/DuoRoom.jpg';
import SingleRoom from '../../assets/SingleRoom.jpg';
import axios from 'axios';
import './Room.css';

export default function RoomComponent() {
    const navigate = useNavigate();

    const [bookingData ,setBookingData] = useState({
        roomId: null,
        customerName: "",
        checkInDate: "",
        checkOutDate: "",
    });

    const handleBooking = async (roomId) => {
        try {
            const response = await axios.post('/api/booking',{
                ...bookingData,
                roomId
            });
            console.log('Booking Succesfully:',response.data)
        } catch (error) {
            console.error('Error booking room:', error);
        }
    }

    const BackHome = () => {
        navigate('/');
    };

    const rooms = [
        {
            id: 1,
            name: "Deluxe Room",
            price: "150$",
            image: DeluxeRoom,
            features: [
                { feature: "Large bed", details: "King-size or Queen-size" },
                { feature: "Premium toiletries", details: "Soap, shampoo, conditioner, lotion" },
                { feature: "Mini-bar or small refrigerator", details: "For refreshments and snacks" },
                { feature: "Bathtub and separate shower", details: "Separate options for bath and shower" },
                { feature: "Free Wi-Fi", details: "Complimentary internet access" }
            ]
        },
        {
            id: 2,
            name: "Duo Room",
            price: "75$",
            image: DuoRoom,
            features: [
                { feature: "Bed", details: "King-size or Queen-size or Twin beds" },
                { feature: "Toiletries", details: "Basic soap, shampoo, conditioner" },
                { feature: "Mini-bar or small refrigerator", details: "For refreshments and snacks" },
                { feature: "Shower", details: "Shower or bathtub" },
                { feature: "Wi-Fi", details: "Free Wi-Fi" }
            ]
        },
        {
            id: 3,
            name: "Single Room",
            price: "20$",
            image: SingleRoom,
            features: [
                { feature: "Bed", details: "Single bed" },
                { feature: "Toiletries", details: "Basic soap, shampoo" },
                { feature: "Mini-bar or small refrigerator", details: "For refreshments and snacks" },
                { feature: "Shower", details: "Shower only" },
                { feature: "Wi-Fi", details: "Free Wi-Fi" }
            ]
        },
    ];

    return (
        <div className="rooms-container">
            <button onClick={BackHome}>Back to Home</button>
            <h1>Our Rooms</h1>
            <div className="room-list">
                {rooms.map(room => (
                    <div key={room.id} className="room-card">
                        <img src={room.image} alt={room.name} />
                        <h2>{room.name}</h2>
                        <ul>
                            {room.features.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.feature}:</strong> {feature.details}
                                </li>
                            ))}
                        </ul>
                        <p>Price: {room.price}</p>
                        {/* ช่องกรอกข้อมูลสำหรับการจอง */}
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })} 
                        />
                        <input 
                            type="date" 
                            onChange={(e) => setBookingData({ ...bookingData, checkInDate: e.target.value })} 
                        />
                        <input 
                            type="date" 
                            onChange={(e) => setBookingData({ ...bookingData, checkOutDate: e.target.value })} 
                        />
                        <button onClick={() => handleBooking(room.id)}>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
