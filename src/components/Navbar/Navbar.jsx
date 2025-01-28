import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link className='logo' to="/">Hotel Booking</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    {/* เพิ่มลิงก์อื่น ๆ ตามต้องการ */}
                </ul>
        </nav>
    );
};

export default Navbar;
