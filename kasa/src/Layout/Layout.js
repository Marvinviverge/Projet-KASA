import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header.js';
import Footer from '@/components/Footer/Footer.js';

import './Layout.css';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;