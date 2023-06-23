
import "./Card.css";

const Card = (logement) => {
    return (
        <li>
            <img className="logement-img" src={logement.image} alt="logement" />
            <div className="logement-sombre"></div>
            <h1>{logement.titre}</h1>
        </li>
    )

}

export default Card;