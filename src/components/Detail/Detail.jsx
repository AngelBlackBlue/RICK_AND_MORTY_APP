import axios from "axios";
import { useParams  } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () =>{
    const { id } = useParams();
    const [characters, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h2>{characters?.name}</h2>
            <h2>{characters?.status}</h2>
            <h2>{characters?.species}</h2>
            <h2>{characters?.gender}</h2>
            <h2>{characters?.origin?.name}</h2>
            <img src={characters?.image} alt=''/>
        </div>
    )
};


export default Detail;