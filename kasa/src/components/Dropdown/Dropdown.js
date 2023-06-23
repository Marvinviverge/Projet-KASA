import React, { useState } from "react";
import "./Dropdown.css";

import Arrow from "@/Assets/images/arrow.png";

const Dropdown = (about) => {
    console.log(about)
    const [view, setview] = useState(false);

    const toggleview = () => {
        setview(!view);
    }


    return (
        <li className="dropdown">
            <div className="dropdownheader" onClick={toggleview}>
                <h2>{about.title}</h2>
                <img className={`${view ? "dropdownArrow" : "dropdownArrow2"}`} src={Arrow} alt='Bouton dropdown' />
            </div>

            {
                view && (
                    <p className="dropdownDescription">{about.description}</p>
                )
            }

        </li>
    )


}

export default Dropdown;