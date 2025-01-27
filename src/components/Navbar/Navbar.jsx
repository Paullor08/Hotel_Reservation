import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
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
            </div>
        </nav>
    );
};

export default Navbar;
