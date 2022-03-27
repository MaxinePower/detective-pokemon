// PokemonCard

// import { useState } from "react";


function PokemonCard(props) {
   
    const selectedPokemonType = (event) => {
        // const pokemonType = props.type
        props.setPType(event.target.value)
    }

    return(
        <>
        <li className='pokemonSuggestion'>
            <div>
            <img src={props.pokeImg} alt={props.name}/>
            </div>
            <div className='textAndButton'>
                <p>Hey Detective!</p>
                <p>I'm {props.name} and my type is {props.type}.</p>
                <p>Do you want me to assist you with this case?</p>
                <button onClick={selectedPokemonType} value={props.type}>Choose {props.name}</button>
            </div>
        </li>
        </>
    )
}

export default PokemonCard;