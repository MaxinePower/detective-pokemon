// CrimeFile

function CrimeFile(props) {
    console.log(props);
    return (
        <li>
            <p>{props.typeOfCrime}</p>
        </li>
    )
};

export default CrimeFile;