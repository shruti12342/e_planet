import React from 'react';
import './Navbar.css';
import to from './to.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className='navbar'>
            <img src={to} />
            <div className='btn'>
                <button  className={location.pathname === '/'? 'active' : ''} style={{marginRight:'50px'}}><Link to='/'>Home</Link></button>
                <button className={location.pathname === '/home'? 'active' : ''} style={{marginRight:'50px'}}><Link to='/home'>Join a Class Now</Link></button>
                <button className={location.pathname === '/calender' ? 'active' : ''} style={{marginRight:'50px'}}><Link to='/calender'>Book a Free Trial</Link></button>
            </div>
        </div>
    );
};

export default Navbar;