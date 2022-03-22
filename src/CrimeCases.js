// CrimeCases
import CrimeFile from "./CrimeFile";
import axios from "axios";
import { useEffect, useState } from "react";

// CrimeCases is only called AFTER submit of the button in location drop-down    
        // CrimeCases component
            // useEffect
                // Make an axios call to UK Police API using chosenLocation data to retrieve list of crimes in that area
                    // https://data.police.uk/api/crimes-at-location/{lat/lngdata}
                // save the returned data in state    
                // the hard coded list of locations will have this data to pass as a prop
                // Map through the returned crimes-at-location data from API and return crimeFile for each case (from category property)

            // -----return crimeFile component (from map)------
                // probably an li to go into a ul
                // through props display the crime type and other data
	
        // user selects a crime file based on the crimes available at the selected location
        // chosen crime gets stored in state/is updated a state thats higher up in the level (App.js)



function CrimeCases(props) {
    const [crimeArray, setCrimeArray] = useState([]);

    useEffect(() => {
        if (props.currentChosenLocation !== "") {
            axios({
                url: 'https://data.police.uk/api/crimes-at-location',
                params: {
                    location_id: props.currentChosenLocation
                }
            }).then((policeApiResult) => {
                const locationResults = policeApiResult.data;
                setCrimeArray(locationResults)
            })
        } 
    }, [props.currentChosenLocation])

    const handleCaseChange = (e) => {
        props.updateChosenCrime(e.target.value);
        console.log(e.target);
    }

    return(
        <section>
            <ul>
                <form action="">
                    <fieldset onChange={handleCaseChange}>
                    {/* <CrimeFile /> */}
                    {
                        crimeArray.map((individualCrime) => {
                            // console.log(individualCrime);
                            return <CrimeFile typeOfCrime={individualCrime.category} key={individualCrime.id} formId={individualCrime.id} individualCrime={individualCrime}/>
                        })
                    }
                    </fieldset>

                </form>
            </ul>

            {/* <ul>
                <form action="">
                    <fieldset>
                        <li>
                            <label htmlFor="case1">Button</label>
                            <input type="radio" name="hello" id="case1" />
                        </li>
                        <li>
                            <input type="radio" name="hello" id="" />
                        </li>
                        <li>
                            <input type="radio" name="hello" id="" />
                        </li>
                    </fieldset>

                </form>
            </ul> */}

        </section>
    )
};

export default CrimeCases;