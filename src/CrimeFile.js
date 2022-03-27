// CrimeFile
// user selects a crime file based on the crimes available at the selected location (through radio inputs label styled like a button)
function CrimeFile(props) {
    return (
        <li className="caseFile">
            <h3>Case #: {props.caseID}</h3>
            <p><span className="caseDetail">Crime Type: </span>{props.typeOfCrime}</p>
            <p><span className="caseDetail">Case Status: </span><span className="active">active</span></p>
            <p><span className="caseDetail">Location: </span>{props.locationName}</p>
            <label htmlFor={props.caseID} className="caseButton">Choose this case</label>
            <input type="radio" name="crimeCases" id={props.caseID} value={props.typeOfCrime}  />
        </li>
    )
};

export default CrimeFile;