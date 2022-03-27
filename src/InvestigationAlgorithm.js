// InvestigationAlgorithm

import investigationData from './investigationData.json'
// keys are crime types and the values in the array are the types that lose to that crime type

function InvestigationAlgorithm(props) {

    let iResult = 'TBD';

    // checking for != '' will stop the algorithm from doing all the checks
    if (props.crimeType !== '' && props.pType !== '') {
        const crimeTypesInvestigationData = investigationData[props.crimeType];
        const willUserLose = crimeTypesInvestigationData.includes(props.pType);
        // checking for if the pTypes in the array for the crimeType matches the users chosen pokemon type
        if (willUserLose) {
            iResult = 'lose';
        } else {
            iResult = 'win';
        }
    } else {
        console.log("pick a crime and a pokemon, bitch");
    }
    console.log(iResult);
    return (
        <div>
            <p>You {iResult}!</p>
        </div>
    );
};

export default InvestigationAlgorithm;