// UserInfo
import CrimeCases from "./CrimeCases";
import {useState} from "react";
// UserInfo component (this will contain the CrimeCases component)
function UserInfo(props) {
    const [changingUserName, setChangingUsername] = useState('');
    const [maybeChosenLocation, setMaybeChosenLocation] = useState('');
    const [chosenLocation, setChosenLocation] = useState('');
    
    const handleNameChange = (e) => {
        setChangingUsername(e.target.value);
    }
    const handleLocationChange = (e) => {
        setMaybeChosenLocation(e.target.value); 
    }
    const handleUserInfoSubmit = (e) => {
        e.preventDefault();
        props.updateUserName(changingUserName);
        setChosenLocation(maybeChosenLocation);
    }
    return(
        <>
            <section className="userInfo">
                <form action="" onSubmit={handleUserInfoSubmit}>
                {/* user inputs name into input field */}
                {/* save this input in a variable and also bind it to the input (controlled inputs) */}
                    <label htmlFor="userName">Officer Name:</label>
                    <input type="text" name="userName" id="userName" placeholder="Joshua Doe"
                    onChange={handleNameChange}
                    value={changingUserName}
                    />

                    {/* user selects a location from a drop down menu */}
                    {/* drop down menu contains 5(or more) pre-selected locations from the API endpoint - **(to be determined)** */}
                    <label htmlFor="locationDropDown">Select Location:</label>
                    <select
                    name="locationDropDown"
                    id="locationDropDown"
                    // trying an inline callback function for event listener
                    onChange={handleLocationChange}
                    defaultValue='placeholder'
                    >
                        <option value="placeholder" disabled>Pick one:</option>
                        <option value="1080957">Cardiff, Wales</option>
                        <option value="538862">Bath, Somerset</option>
                        <option value="1296059">Leeds, West Yorkshire</option>
                        <option value="928868">Croydon, London</option>
                        <option value="956527">Piccadilly Circus, London</option>
                    </select>

                    <button type="submit">View Your Cases</button>
                </form>
            </section>
            <CrimeCases 
                currentChosenLocation={chosenLocation}
                updateChosenCrimeType={props.updateChosenCrimeType}
                updateChosenCaseNum={props.updateChosenCaseNum}
            />
        </>
    );
}

export default UserInfo;