import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar'
import FooterComponent from '../components/Footer/Footer';
import LoginComponent from '../components/Login/Login';

export default function Loginpage() {
    return (
        <div>
            <NavbarComponent/>
            <LoginComponent/>
            <FooterComponent/>
        </div>
    );
};