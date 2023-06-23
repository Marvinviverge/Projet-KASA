import React from 'react';
import LogementService from "@/_Service/logement.service.js";

import { useParams } from 'react-router-dom'

const Apartment = () => {
    const { id } = useParams()
    const ApartmentSelected = LogementService.GetOneLogement().find((apartment) => apartment.id === id)
    console.log(ApartmentSelected)
    return (
        <section className='Apartment'>
            {

            }


        </section>
    );
};

export default Apartment;