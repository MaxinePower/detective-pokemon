// InvestigationAlgorithm

import investigationData from './investigationData.json'
// keys are crime types and the values in the array are the types that lose to that crime type

function InvestigationAlgorithm(props) {
    const refreshPage = () => {
        window.location.reload();
    }
    let iResult = '';
    // checking for != '' will stop the algorithm from doing all the checks
    if (props.crimeType !== '' && props.pType !== '') {
        const crimeTypesInvestigationData = investigationData[props.crimeType];
        const willUserLose = crimeTypesInvestigationData.includes(props.pType);
        // checking for if the pTypes in the array for the crimeType matches the users chosen pokemon type
        if (willUserLose) {
            iResult = `Better luck next time ${props.detectiveName}! Your Pokémon wasn't the right type to solve this crime.`;
            return (
                <div className='results'>
                    <p>{iResult}</p>
                    <button className='pokemonButton' onClick={refreshPage}>Play Again?</button>
                </div>
            );
        } else {
            iResult = `Congratulations Detective ${props.detectiveName}! You solved the case because this Pokémon is great against this crime type!`;
            return (
                <div className='results'>
                    <p>{iResult}</p>
                    <button className='pokemonButton' onClick={refreshPage}>Play Again?</button>
                </div>
            );
        }
    }
    // mysterious return
    return (
        <></>
    );
};

export default InvestigationAlgorithm;