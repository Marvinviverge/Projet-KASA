import React from 'react';
import './Footer.css'

import Logo from '@/Assets/images/Logo-Kasa-Footer.png';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt='Logo du Footer de Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;