import ListeLogements from "@/Assets/Api/logements.data.json";

let GetAllLogement = () => {
    return ListeLogements;
}

let GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    return OneLogement;
}

const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService