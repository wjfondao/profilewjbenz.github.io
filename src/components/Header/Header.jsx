import React from "react";
import logo from '../../assets/logo.png';
import "./Header.css";


const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">

                <a href="index.html" className="nav__logo">
                    <img src={logo} alt="Logo" />
                </a>


                <div className="nav_headmenu ">
                    <div className="nav__menu">
                        <ul className="nav__list grid ">

                            {/* Home */}
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link ">
                                    <i className="uil uil-estate nav__icon "></i> Home
                                </a>
                            </li>

                            {/* About */}
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> About
                                </a>
                            </li>

                            {/* Skills */}
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li>

                            {/* Portfolio */}
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                                </a>
                            </li>

                            {/* Contact */}
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                            </li>

                            {/* ICON CLOSE  X */}
                            <i className="uil uil-times nav__close"></i>
                        </ul>
                    </div>

                    <div className="nav__toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header