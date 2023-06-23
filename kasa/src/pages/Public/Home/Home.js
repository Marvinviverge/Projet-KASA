import React from 'react';
import './Home.css'

import { NavLink } from 'react-router-dom';

import Hero from "@/components/Hero/Hero.js";
import Card from "@/components/Card/Card.js";

import HeroImg from "@/Assets/images/Background1.png";

import LogementService from "@/_Service/logement.service.js";

const Home = () => {
    return (
        <section className='Home'>
            <Hero image={HeroImg} title="Chez vous, partout et ailleurs" />

            <ul className='logement'>
                {
                    LogementService.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/apartment/" + logement.id + "/#"}>
                            <Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
                        </NavLink>
                    )
                }
            </ul>

        </section>
    );
};

export default Home;