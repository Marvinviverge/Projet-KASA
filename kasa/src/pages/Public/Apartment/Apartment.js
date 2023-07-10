import React, { useEffect, useState } from 'react';
import LogementService from "@/_Service/logement.service.js";

import Tag from "@/components/Tag/Tag.js";
import Star from "@/components/Star/Star.js";

import { useNavigate, useParams } from 'react-router-dom'
import "./Apartment.css";

import Dropdown from '@/components/Dropdown/Dropdown.js';
import Slide from '@/components/Slide/Slide.js';


const Apartment = () => {
    const { id } = useParams();

    const [ApartmentSelected, setApartmentSelected] = useState({});
    const [Waiting, setWaiting] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const getInfo = async () => {
        await LogementService.GetOneLogement(id)
            .then((response) => {
                if (response) {
                    setApartmentSelected(response);
                    setWaiting(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (Waiting) return (<h2>Chargement...</h2>)
    return (
        <section className='Apartment'>
            <Slide pictures={ApartmentSelected.pictures} />
            <div className='globalInfos'>
                <div className='informations'>
                    <div className='location'>
                        <h2>{ApartmentSelected.title}</h2>
                        <p>{ApartmentSelected.location}</p>
                    </div>
                    <ul className='tags'>
                        {
                            ApartmentSelected.tags.map((tag, index) =>
                                <Tag key={index} tagname={tag} />
                            )
                        }
                    </ul>
                </div>
                <div className='hostrating'>
                    <div className='host'>
                        <p>{ApartmentSelected.host.name}</p>
                        <img src={ApartmentSelected.host.picture} alt='Profil host' />
                    </div>
                    <div className='rating'>
                        <Star rating={ApartmentSelected.rating} />
                    </div>
                </div>
            </div>
            <div className='dropdownInformations'>
                <Dropdown title='Description' description={ApartmentSelected.description} otherview='false' />
                <Dropdown title='Équipements' description={ApartmentSelected.equipments} otherview='true' />
            </div>

        </section>
    );
};

export default Apartment;