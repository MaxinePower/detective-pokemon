// Results
import InvestigationAlgorithm from "./InvestigationAlgorithm";
import { useRef, useEffect } from 'react';

function Results(props) {
    const resultsRef = useRef(null);
    useEffect(()=>{
        if (props.showMeTheResults) {
            resultsRef.current.scrollIntoView();
        }
    }, [props.showMeTheResults])

    return(
        <section ref={resultsRef}>
            <InvestigationAlgorithm
                crimeType={props.crimeType}
                pType={props.pokiType}
                detectiveName={props.detectiveName}
            />
        </section>
    );
};
export default Results;