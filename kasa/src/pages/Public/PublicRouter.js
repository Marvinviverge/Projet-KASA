import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Apartment, About, Error } from '@/pages/Public/index.js'

import Layout from '@/Layout/Layout.js';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route path="" element={<Navigate to="/home" />} />

                <Route path="/home" element={<Home />} />
                <Route path="/apartment/:id" element={<Apartment />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;