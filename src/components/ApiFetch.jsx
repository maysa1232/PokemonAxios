import React, {useState} from 'react';
import axios from 'axios';


const ApiFetch = props => {
    const [pokemon, setpokemon] = useState([]);

    const onClick = e => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(res => {
                setpokemon(res.data.results);
            })
            .catch(err => console.log(err));
    }
    
    
    
    return(
    <div>
        <h1> Pokemon APIs</h1>
        <button onClick={onClick}>Catch Pokemon</button>
        <ul>
            {pokemon.map((poke, index) => (
                <li key={index}>{poke.name}</li>
            ))}
        </ul>
    </div> 
    )
    
}

export default ApiFetch;