import React from 'react';
import HomeComponent from '../components/Home/Home';
import NavbarComponent from '../components/Navbar/Navbar';
import FooterComponent from '../components/Footer/Footer';

export default function Homepage() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />
            <HomeComponent />
            <FooterComponent />
        </div>
    );
}
