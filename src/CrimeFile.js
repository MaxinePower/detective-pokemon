// CrimeFile
// user selects a crime file based on the crimes available at the selected location (through radio inputs label styled like a button)
function CrimeFile(props) {
    return (
        <li className="caseFile">
            <h3>Case #: {props.caseID}</h3>
            <p>Crime Type: {props.typeOfCrime}</p>
            <p>Case Status: open</p>
            <p>Location: {props.locationName}</p>
            <label htmlFor={props.caseID} className="caseButton">Choose this case</label>
            <input type="radio" name="crimeCases" id={props.caseID} value={props.typeOfCrime}  />
        </li>
    )
};

export default CrimeFile;