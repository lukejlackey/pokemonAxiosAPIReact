import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonList = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => {
                console.log(response)
                setPokemon(response.data.results)
            })
    }, []);

    const handleClick = (e) => {
        setIsClicked(!isClicked);
    }

    return(
        <div>
            {
                isClicked?
                <ul>
                    {pokemon.map( (p, i) =>
                        <li key={i}>{p.name}</li>
                    )}
                </ul>:
                <button onClick={handleClick}>Get Pokemon!</button>
            }
        </div>
    )
}

export default PokemonList;