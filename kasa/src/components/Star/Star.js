import React from 'react';

import './Star.css';
import Staractive from '@/Assets/images/star-active.png'
import Starinactive from '@/Assets/images/star-inactive.png'

const Star = (rating) => {
    return (
        <div className='Rate'>
            {
                [...Array(5)].map((_, index) => {
                    if (index + 1 > rating.rating) {
                        return (
                            <img src={Starinactive} alt="rating star" key={index} className="starImg" />
                        )
                    }
                    else {
                        return (
                            <img src={Staractive} alt="rating star" key={index} className="starImg" />
                        )
                    }
                })
            }
        </div>
    )

};

export default Star;