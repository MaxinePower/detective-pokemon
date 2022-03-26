// InvestigationAlgorithm

function InvestigationAlgorithm(props) {

    // const chosenCrimeType = 'anti-social behaviour';
    let iResult = 'lose';

    if (props.crimeType == 'anti-social-behaviour' && props.pType == 'ghost' || props.crimeType == 'anti-social-behaviour' && props.pType == 'psychic') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'bicycle-theft' && props.pType == 'water' || props.crimeType == 'bicycle-theft' && props.pType == 'ground' || props.crimeType == 'bicycle-theft' && props.pType == 'rock') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'burglary' && props.pType == 'fire' || props.crimeType == 'burglary' && props.pType == 'ground' || props.crimeType == 'burglary' && props.pType == 'rock') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'criminal-damage-andarson' && props.pType == 'grass' || props.crimeType == 'criminal-damage-and-arson' && props.pType == 'ice' || props.crimeType == 'criminal-damage-and-arson' && props.pType == 'bug' || props.crimeType == 'criminal-damage-and-arso' && props.pType == 'steel') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'drugs' && props.pType == 'grass' || props.crimeType == 'drugs' && props.pType == 'fair') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'other-theft' && props.pType == 'normal' || props.crimeType == 'other-theft' && props.pType == 'ice' || props.crimeType == 'other-theft' && props.pType == 'rock' || props.crimeType == 'other-theft' && props.pType == 'dark' || props.crimeType == 'other-theft' && props.pType == 'steel') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'possession-of-weapons' && props.pType == 'grass' || props.crimeType == 'possession-of-weapons' && props.pType == 'ground' || props.crimeType == 'possession-of-weapons' && props.pType == 'flying' || props.crimeType == 'possession-of-weapons' && props.pType == 'dragon') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'public-order' && props.pType == 'water' || props.crimeType == 'public-order' && props.pType == 'flying') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'robbery' && props.pType == 'fire' || props.crimeType == 'robbery' && props.pType == 'electric' || props.crimeType == 'robbery' && props.pType == 'poison' || props.crimeType == 'robbery' && props.pType == 'fairy') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'shoplifting' && props.pType == 'grass' || props.crimeType == 'shoplifting' && props.pType == 'fighting' || props.crimeType == 'shoplifting' && props.pType == 'bug') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'theft-from-the-person' && props.pType == 'fighting' || props.crimeType == 'theft-from-the-person' && props.pType == 'poison') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'vehicle-crime' && props.pType == 'grass' || props.crimeType == 'vehicle-crime' && props.pType == 'psychic' || props.crimeType == 'vehicle-crime' && props.pType == 'dark') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'violence-and-sexual-offences' && props.pType == 'psychic' || props.crimeType == 'violence-and-sexual-offences' && props.pType == 'ghost') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    if (props.crimeType == 'other-crime' && props.pType == 'ice' || props.crimeType == 'other-crime' && props.pType == 'rock' || props.crimeType == 'other-crime' && props.pType == 'fairy') {
        iResult = 'lose';
        console.log(iResult, "b/c this type of pokemon is vulnerable to this type of crime 'pokemon'");
    } else {
        iResult = 'win';
        console.log(iResult, "b/c this type is not vulnerable to this type of crime 'pokemon'");
    }

    return (
        <div>
            <p>{iResult}</p>
        </div>
    );
};

export default InvestigationAlgorithm;