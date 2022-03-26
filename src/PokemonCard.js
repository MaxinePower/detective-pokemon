// PokemonCard

import { useState } from "react";
import InvestigationAlgorithm from "./InvestigationAlgorithm";


function PokemonCard(props) {
   
    const selectedPokemonType = (event) => {
        const pokemonType = props.type
        props.setPType(event.target.value)
    }

    return(
        <>
        <li>
            <img src={props.pokeImg} alt={props.name}/>
            {/* update usename in <p> */}
            {/* add cryme scene type in sentence */}
                <p>Hey Detective! I'm {props.name} and my type is {props.type}. Do you want me to assist you with this case?</p>
            <button onClick={selectedPokemonType} value={props.type}>Choose {props.name}</button>
        </li>
        {/* <InvestigationAlgorithm pType={pType} /> */}
        </>
    )
}

export default PokemonCard;