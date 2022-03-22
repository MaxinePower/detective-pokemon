// PokemonSelections
import PokemonCard from "./PokemonCard";
import axios from 'axios';
import { useEffect, useState } from 'react';


function PokemonSelections() {
    const [pokemon, setPokemon] = useState([]);

    
    useEffect(() => {
        
        for (let i=0; i<5; i++) {
            
            // Generate random pokemon id number
            let id = Math.floor(Math.random() * (898 - 1)) + 1;
            
            // API Call
            axios({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            })
            .then(response => {
                // console.log(response.data);
                // console.log(response.data.forms[0].name);
                // console.log(response.data.types[0].type.name);
                // console.log(response.data.sprites.other.home.front_default);
                // setPokemon(response.data);
                
                // console.log('this is state', setPokemon);
                let newState = this.push(response.data);
                
                // console.log(newState);
                setPokemon(newState);
            })
        }
    }, []);
    console.log(pokemon);
    return (
        <section>
            <ul>
                {pokemon.map((individualPokemon) =>{
                    return <PokemonCard pokemonName={individualPokemon.name} />


                    
                }
                
                )}
                {/* pokemon array */}
                {/* <PokemonCard /> */}

            </ul>
        </section>
    );
};

export default PokemonSelections;