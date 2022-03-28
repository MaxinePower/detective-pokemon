// InvestigationAlgorithm

import investigationData from './investigationData.json'
// keys are crime types and the values in the array are the types that lose to that crime type

function InvestigationAlgorithm(props) {

    let iResult = '';

    // checking for != '' will stop the algorithm from doing all the checks
    if (props.crimeType !== '' && props.pType !== '') {
        const crimeTypesInvestigationData = investigationData[props.crimeType];
        const willUserLose = crimeTypesInvestigationData.includes(props.pType);
        // checking for if the pTypes in the array for the crimeType matches the users chosen pokemon type
        if (willUserLose) {
            iResult = "Better luck next time! Your Pokemon wasn't the right type to solve this crime.";
            <button>Play Again?</button>
        } else {
            iResult = 'Congratulations! You solved the case!';
            <button>Play Again?</button>
        }
    } else {
        // console.log("pick a crime and a pokemon");
    }
    console.log(iResult);
    return (
        <div>
            <p>deafhwserth{iResult}</p>
        </div>
    );
};

export default InvestigationAlgorithm;