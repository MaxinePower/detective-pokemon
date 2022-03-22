// PokemonCard

function PokemonCard(props) {

    console.log(props);

    return(
        <li>
            <p>{props.pokemonName}</p>
            {/* <img src={props.} alt="" /> */}
        </li>
    );
};

export default PokemonCard;