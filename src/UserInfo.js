// UserInfo
import CrimeCases from "./CrimeCases";
import {useState} from "react";
// UserInfo component (this will contain the CrimeCases component)
            //** consider adding user name input to app.js component to make it easier to pass down to later components **
            // user inputs name into input field
                // save this input in a variable and also bind it to the input (controlled inputs)
            // user selects a location from a drop down menu
            // drop down menu contains 5(or more) pre-selected locations from the API endpoint - **(to be determined)**
function UserInfo(props) {

    const handleNameChange = (e) => {
        props.updateUserName(e.target.value);
    }

    const [chosenLocation, setChosenLocation] = useState('');


    return(
        <>
            <section>
                <form action="">
                    <label htmlFor="userName">Officer Name:</label>
                    <input type="text" name="userName" id="userName" placeholder="your name here" 
                    onChange={handleNameChange}
                    value={props.currentUserName}
                    />

                    <label htmlFor="locationDropDown">Select Location:</label>
                    <select
                    name="locationDropDown"
                    id="locationDropDown"
                    // trying an inline callback function for event listener
                    onChange={ (e) => {setChosenLocation(e.target.value) } }
                    defaultValue='placeholder'
                    >
                        <option value="placeholder" disabled>Pick one:</option>
                        <option value="1080957">Cardiff, Wales</option>
                        <option value="538862">Bath, Somerset</option>
                        <option value="1296059">Leeds, West Yorkshire</option>
                        <option value="928868">Croydon, London</option>
                        <option value="956527">Piccadilly Circus, London</option>
                    </select>
                </form>
            </section>
            <CrimeCases 
                currentChosenLocation={chosenLocation}
                updateChosenCrime={props.updateChosenCrime}
            />
        </>
    );
}

export default UserInfo;