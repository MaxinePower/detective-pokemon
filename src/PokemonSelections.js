// PokemonSelections
import PokemonCard from "./PokemonCard";
import axios from 'axios';
import { useEffect, useState } from 'react';


function PokemonSelections() {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let newState = [...pokemon];
        
        for (let i = 0; i < 5; i++) {

            // Generate random pokemon id number
            let id = Math.floor(Math.random() * (898 - 1)) + 1;

            // API Call
            axios({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            .then(response => {
                setLoading(true);
                newState.push({
                    key: id,
                    name: response.data.name,
                    type: response.data.types[0].type.name,
                    pokeImg: response.data.sprites.other.home.front_default
                });
                setLoading(false);

            })
            .catch(() => { console.log("error") })
        }
        setPokemon(newState);
        console.log(newState);

    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }


    // console.log(pokemon.length);
    return (
        <section>
            <ul>
                {
                    pokemon.map((individualPokemon) => {
                        // console.log(individualPokemon.name);
                        return (
                            <PokemonCard
                                key={individualPokemon.key}
                                name={individualPokemon.name}
                                type={individualPokemon.type}
                                pokeImg={individualPokemon.pokeImg}
                            />
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default PokemonSelections;