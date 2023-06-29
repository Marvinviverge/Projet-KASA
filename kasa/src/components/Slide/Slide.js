import React from 'react';

import './Slide.css';

import ArrowNext from "@/Assets/images/arrowNext.png";
import ArrowPrevious from "@/Assets/images/arrowPrevious.png";

const Slide = ({ cover, pictures }) => {
    return (
        <section className='carroussel'>
            <img className='arrowCarrousselPrev' src={ArrowPrevious} alt='Carroussel Previous' />
            <img src={cover} alt='Cover carroussel' />
            <img className='arrowCarrousselNext' src={ArrowNext} alt='Carroussel Next' />
            <p className='carrousselNumber'>{pictures.length}</p>
        </section>
    );
};

export default Slide;