import React from "react";

import "./Hero.css";

const Hero = (hero) => {
    return (
        <section className="hero">
            <img className="hero-img" src={hero.image} alt="Bannière" />
            <div className="hero-sombre"></div>
            <h1>{hero.title}</h1>
        </section>
    );
}

export default Hero;