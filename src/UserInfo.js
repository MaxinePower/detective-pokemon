// UserInfo
import CrimeCases from "./CrimeCases";
import {useState} from "react";
// UserInfo component (this will contain the CrimeCases component)
function UserInfo(props) {
    const [changingUserName, setChangingUsername] = useState('');
    const [maybeChosenLocation, setMaybeChosenLocation] = useState('placeholder');
    const [chosenLocation, setChosenLocation] = useState('');

    // Error handling for form - states to store the error status
    const [locationErrorStatus, setLocationErrorStatus] = useState(false);
    const [nameErrorStatus, setNameErrorStatus] = useState(false);
    
    const handleNameChange = (e) => {
        setChangingUsername(e.target.value);
    }
    const handleLocationChange = (e) => {
        setMaybeChosenLocation(e.target.value); 
    }
    const handleUserInfoSubmit = (e) => {
        e.preventDefault();

        // resets the error status back to false
        setLocationErrorStatus(false)
        setNameErrorStatus(false)

        // Error handling for form inputs
        if (maybeChosenLocation !== "placeholder" && changingUserName !== "") {
            props.updateUserName(changingUserName);
            setChosenLocation(maybeChosenLocation);
        } else if (changingUserName === "" && maybeChosenLocation === "placeholder") {
            // alert("please enter your name and choose a location!")
            setLocationErrorStatus(true)
            setNameErrorStatus(true)
        } else if (changingUserName === "") {
            // alert("please enter your name!")
            setNameErrorStatus(true)
        } else if (maybeChosenLocation === "placeholder") {
            // alert("please choose a location!")
            setLocationErrorStatus(true)
        }
    }
    return(
        <>
            <section className="userInfo">
                <form action="" onSubmit={handleUserInfoSubmit}>
                {/* user inputs name into input field */}
                {/* save this input in a variable and also bind it to the input (controlled inputs) */}
                    <div className="userInputContainers">
                        <label htmlFor="userName">Officer Name:</label>
                        <input type="text" name="userName" id="userName" placeholder="Joshua Doe"
                        onChange={handleNameChange}
                        value={changingUserName}
                        />

                        {/* Form error handling */}
                        {
                            nameErrorStatus
                            ? <span className="errorFlag">Please enter your name.</span>
                            : <span className="errorFlag hidden">Please enter your name.</span>
                        }
                    </div>
                    <div className="userInputContainers">
                        {/* user selects a location from a drop down menu */}
                        <label htmlFor="locationDropDown">Select Location:</label>
                        <select
                        name="locationDropDown"
                        id="locationDropDown"
                        // trying an inline callback function for event listener
                        onChange={handleLocationChange}
                        defaultValue='placeholder'
                        >
                            <option value="placeholder" disabled>Pick one:</option>
                            <option value="960157">Abbey Road, London</option>
                            <option value="964955">Camden Town, London</option>
                            <option value="956143">Covent Garden, London</option>
                            <option value="928868">Croydon, London</option>
                            <option value="956557">Piccadilly Circus, London</option>
                            <option value="538862">Bath, Somerset</option>
                            <option value="560578">Cambridge, Cambridgeshire</option>
                            <option value="1080958">Cardiff, Wales</option>
                            <option value="1489701">Edinburgh, Scotland</option>
                            <option value="1296059">Leeds, West Yorkshire</option>


                        </select>
                        {/* Form error handling */}
                        {
                            locationErrorStatus
                            ? <span className="errorFlag">Please choose a location.</span>
                            : <span className="errorFlag hidden">Please choose a location.</span>
                        }
                    </div>

                    <button type="submit" className="viewCasesButton">View Your Cases</button>
                </form>
            </section>
            {
                chosenLocation !== ""  
                ? <CrimeCases 
                    currentChosenLocation={chosenLocation}
                    updateChosenCrimeType={props.updateChosenCrimeType}
                    updateChosenCaseNum={props.updateChosenCaseNum}
                />
                : null
            }
        </>
    );
}

export default UserInfo;