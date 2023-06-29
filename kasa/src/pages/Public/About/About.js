import React from 'react';

import Hero from "@/components/Hero/Hero.js";
import HeroImg from "@/Assets/images/Background2.png";

import Dropdown from "@/components/Dropdown/Dropdown.js";
import AboutService from "@/_Service/about.service.js";

import "./About.css";


const About = () => {
    return (
        <section className='about'>
            <Hero image={HeroImg} title="" />

            <div className='aboutDropdown'>
                {
                    AboutService.GetAbout().map((about) =>
                        <Dropdown key={about.title} title={about.title} description={about.description} otherview='false' />
                    )
                }
            </div>
        </section>

    );
};

export default About;