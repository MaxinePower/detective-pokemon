// CrimeFile

function CrimeFile(props) {
    console.log(props.individualCrime);
    return (
        <li>
            <p>{props.typeOfCrime}</p>
            <label htmlFor={props.formId}>Choose this case</label>
            <input type="radio" name="crimeCases" id={props.formId} value={props.individualCrime} />
        </li>
    )
};

export default CrimeFile;