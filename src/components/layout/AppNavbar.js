import React from 'react';
import '../../container/MainLayout.css';

// import logo from './sharingan.png';


const AppNavbar = () => {
    return (
        <div className="nav-top">
            <ul>
                <li className="logo"><a><img src="./images/logo192.png"></img></a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )
}

export default AppNavbar;