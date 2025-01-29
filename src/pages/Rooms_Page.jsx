import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar'
import FooterComponent from '../components/Footer/Footer';
import RoomComponent from '../components/Rooms/Rooms';

export default function Roomspage() {
    return (
        <div>
            <NavbarComponent/>
            <RoomComponent/>
            <FooterComponent/>
        </div>
    );
};