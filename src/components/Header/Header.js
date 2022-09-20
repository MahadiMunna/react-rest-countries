import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is header Component</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/visit">Visit</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;