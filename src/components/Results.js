// Results
import InvestigationAlgorithm from "./InvestigationAlgorithm";

function Results(props) {
    return(
        <section id="jumpResults">
            <InvestigationAlgorithm
                crimeType={props.crimeType}
                pType={props.pokiType}
                detectiveName={props.detectiveName}
            />
        </section>
    );
};
export default Results;