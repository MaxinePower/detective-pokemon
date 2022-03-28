// Results
import InvestigationAlgorithm from "./InvestigationAlgorithm";

function Results(props) {
    return(
        <section id="jumpResults">
            <InvestigationAlgorithm
                crimeType={props.crimeType}
                pType={props.pokiType}
            />
        </section>
    );
};
export default Results;