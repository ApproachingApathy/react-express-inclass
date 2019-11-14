import React from 'react';
import Navbar from './navbar/Navbar';
import '../../styles/header/header.css'

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="div-header-titleSection">
                    <div className="div-header-titleSection-img">
                        <img src="https://via.placeholder.com/100px" alt="placeholder" className="header-img"/>
                    </div>
                    <div className="div-header-titleSection-title">
                        <h1 className="header-title">
                            My Blog
                        </h1>
                    </div>
                </div>
                <Navbar />
            </header>
        )
    }
}