import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar'
import FooterComponent from '../components/Footer/Footer';
import RegisterComponent from '../components/Register/Register';

export default function Registerpage() {
    return (
        <div>
            <NavbarComponent/>
            <RegisterComponent/>
            <FooterComponent/>
        </div>
    );
};