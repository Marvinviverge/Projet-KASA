import React, { useState } from 'react';

import './Slide.css';

import ArrowNext from "@/Assets/images/arrowNext.png";
import ArrowPrevious from "@/Assets/images/arrowPrevious.png";

const Slide = ({ pictures }) => {

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }

    return (
        <section className='carroussel'>
            {
                pictures.length >= 2 ? (
                    <>
                        <div className='arrowCarroussel'>
                            <img className='arrowCarrousselPrev' src={ArrowPrevious} alt='Carroussel Previous' onClick={prevSlide} />
                            <img className='arrowCarrousselNext' src={ArrowNext} alt='Carroussel Next' onClick={nextSlide} />
                        </div>
                        <p className='carrousselNumber'>{current + 1}/{pictures.length}</p>
                    </>
                ) : null
            }
            {
                pictures.map((picture, index) => {
                    return (
                        index === current && <img key={index} src={picture} alt='Cover carroussel' />
                    )
                })
            }

        </section>
    );
};

export default Slide;