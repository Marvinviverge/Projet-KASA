import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';
import Logo from '@/Assets/images/Logo-Kasa.png';

const Header = () => {
    return (
        <header>
            <NavLink to="/home">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/about" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;