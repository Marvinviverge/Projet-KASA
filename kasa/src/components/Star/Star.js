import React from 'react';

import './Star.css';
import Staractive from '@/Assets/images/star-active.png'
import Starinactive from '@/Assets/images/star-inactive.png'

const Star = (rating) => {
    return (
        <div className='Rate'>
            <img src={rating.rating > 0 ? Staractive : Starinactive} alt='Location Star Rate' />
            <img src={rating.rating > 1 ? Staractive : Starinactive} alt='Location Star Rate' />
            <img src={rating.rating > 2 ? Staractive : Starinactive} alt='Location Star Rate' />
            <img src={rating.rating > 3 ? Staractive : Starinactive} alt='Location Star Rate' />
            <img src={rating.rating > 4 ? Staractive : Starinactive} alt='Location Star Rate' />
        </div>
    )

};

export default Star;