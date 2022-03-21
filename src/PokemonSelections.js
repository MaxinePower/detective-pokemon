// PokemonSelections
// import PokemonCard from "./PokemonCard";
import axios from 'axios';
import { useEffect, useState } from 'react';

// import PokemonCard from "./PokemonCard";


function PokemonSelections() {
    const [pokemon, setPokemon] = useState({});
    const id = 12;
    useEffect(() => {
        axios({
            url: `https://pokeapi.co/api/v2/pokemon/${id}`
        })
        .then( response => {
            console.log(response.data);
        })
    })
    return(
        <section>
            <ul>
                {/* pokemon array */}
                {/* <PokemonCard /> */}

            </ul>
        </section>
    );
};

export default PokemonSelections;