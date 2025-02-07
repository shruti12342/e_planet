import React from 'react';
import './Navbar.css';
import to from './to.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={to} />
            <div className='btn'>
                <button className='joinClass'><a href='Login.js'>Join a Class Now</a></button>
                <button className='bootTrail'><a className='bt'>Book a Free Trial</a></button>
            </div>
        </div>
    );
};

export default Navbar;