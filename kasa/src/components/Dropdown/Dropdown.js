import React, { useState } from "react";
import "./Dropdown.css";

import Arrow from "@/Assets/images/arrow.png";

const Dropdown = ({ title, description, otherview }) => {


    const [view, setview] = useState(false);

    const toggleview = () => {
        setview(!view);
    }

    const textDescription = (description, otherview) => {
        if (otherview === 'true') {
            return (
                <ul className='dropdownDescription fs18'>
                    {
                        description.map((equipments, index) => <li key={index}>{equipments}</li>)
                    }
                </ul>
            )
        } else {
            return (
                <p className='dropdownDescription fs18'>{description}</p>
            )
        }
    }


    return (
        <div className="dropdown">
            <div className="dropdownheader" onClick={toggleview}>
                <h2>{title}</h2>
                <img className={`${view ? "dropdownArrow" : "dropdownArrow2"}`} src={Arrow} alt='Bouton dropdown' />
            </div>

            {
                view && textDescription(description, otherview)
            }
        </div>
    )


}

export default Dropdown;