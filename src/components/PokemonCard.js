// PokemonCard
function PokemonCard(props) {
    
    const selectedPokemonType = (event) => {
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
                    <p>I'm <span> {props.name} </span> and my type is {props.type}.</p>
                <p className="buttonText">Do you want me to assist you with this case?</p>
                {/* <button className="pokemonButton" onClick={selectedPokemonType} value={props.type}>Choose <span>{props.name} </span></button> */}
                    <button className="pokemonButton" onClick={selectedPokemonType} value={props.type}><a href="#jumpResults">Choose <span> {props.name} </span></a></button>
            </div>
        </li>
        </>
    )
}

export default PokemonCard;