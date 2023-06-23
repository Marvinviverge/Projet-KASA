import ListeLogements from "@/Assets/Api/logements.data.json";

let GetAllLogement = () => {
    return ListeLogements;
}

let GetOneLogement = (id) => {
    return ListeLogements;
}

const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService