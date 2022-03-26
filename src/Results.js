// Results
import InvestigationAlgorithm from "./InvestigationAlgorithm";

function Results(props) {
    
    return(
        <section>
            <InvestigationAlgorithm
                crimeType={props.crimeType}
                pType={props.pokiType}
            />

        </section>
    );
};
export default Results;