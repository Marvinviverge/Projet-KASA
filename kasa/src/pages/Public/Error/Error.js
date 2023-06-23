import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Error.css";

const Error = () => {
    return (
        <section className='error404'>
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <NavLink to="/home" className='returnHome'>Retourner sur la page d'accueil</NavLink>
        </section>
    );
};

export default Error;