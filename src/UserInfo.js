// UserInfo
import CrimeCases from "./CrimeCases";
// UserInfo component (this will contain the CrimeCases component)
            //** consider adding user name input to app.js component to make it easier to pass down to later components **
            // user inputs name into input field
                // save this input in a variable and also bind it to the input (controlled inputs)
            // user selects a location from a drop down menu
            // drop down menu contains 5(or more) pre-selected locations from the API endpoint - **(to be determined)**
function UserInfo() {
    return(
        <>
            <section>
                <form action="">
                    <label htmlFor="userName">Officer Name:</label>
                    <input type="text" name="userName" id="userName" placeholder="your name here" />

                    <label htmlFor="locationDropDown">Select Location:</label>
                    <select name="locationDropDown" id="locationDropDown">
                        <option value="1080957">Cardiff, Wales</option>
                        <option value="538862">Bath, Somerset</option>
                        <option value="1296059">Leeds, West Yorkshire</option>
                        <option value="928868">Croydon, London</option>
                        <option value="956527">Piccadilly Circus, London</option>
                    </select>
                </form>
            </section>
            <CrimeCases />
        </>
    );
}

export default UserInfo;