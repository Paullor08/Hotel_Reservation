import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <h1>About Us</h1>
            <p>Information about the hotel...</p>
            {/* เพิ่มรายละเอียดเพิ่มเติม */}
            <Footer />
        </div>
    );
};

export default About;
