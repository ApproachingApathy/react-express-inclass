import React from 'react';
import {Link} from 'react-router-dom'
import '../../../styles/header/navbar/navbar.css'

export default function Navbar () {
    return (
        <div className="div-navbar">
            <ul className="navbar-list">
                <Link to='/'>
                    <li className="navbar-list-item">Home</li>
                </Link>
                <Link to='/'>
                    <li className="navbar-list-item">Home</li>
                </Link>
                <Link to='/'>
                    <li className="navbar-list-item">Home</li>
                </Link>
                <Link to='/'>
                    <li className="navbar-list-item">Home</li>
                </Link>
            </ul>
        </div>
    )

}