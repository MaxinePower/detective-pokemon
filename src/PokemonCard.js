// PokemonCard

function PokemonCard(props) {

    console.log(props.name);

    return(
        <li>
            <p>{props.key}</p>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <img src={props.pokeImg} alt={props.name}/>
        </li>
    )
}

export default PokemonCard;