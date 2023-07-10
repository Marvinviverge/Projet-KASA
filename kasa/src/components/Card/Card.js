
import "./Card.css";

const Card = (logement) => {
    return (
        <li>
            <img className="logement-img" src={logement.image} alt="logement" />
            <div className="logement-sombre"></div>
            <h2>{logement.titre}</h2>
        </li>
    )

}

export default Card;