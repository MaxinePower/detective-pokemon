// CrimeCases
import CrimeFile from "./CrimeFile";
import axios from "axios";
import { useEffect, useState } from "react";

function CrimeCases(props) {
    const [crimeArray, setCrimeArray] = useState([]);
    // useEffect
    useEffect(() => {
        if (props.currentChosenLocation !== "") {
            // Make an axios call to UK Police API using chosenLocation data to retrieve list of crimes in that area
            axios({
                url: 'https://data.police.uk/api/crimes-at-location',
                params: {
                    // date: "2021-08",
                    location_id: props.currentChosenLocation
                }
            }).then((policeApiResult) => {
                // console.log(policeApiResult);
                if (policeApiResult.status === 200) {
                    // save the returned data in state
                    const locationResults = policeApiResult.data;
                    setCrimeArray(locationResults);
                } else {
                    throw new Error("The API response didn't return the data we were looking for. Please try again later.");
                }
            }).catch(function(error) {
                console.log(error);
                alert("Your request can't be completed, check the console for more detail.")
            });
        } 
    // CrimeCases is only called AFTER submit of the button in location drop-down   
    }, [props.currentChosenLocation])

    const handleCaseChange = (e) => {
        // stretch goal is displaying the case in the other components
        // chosen crime gets stored in state/is updated a state thats higher up in the level (App.js)
        props.updateChosenCrimeType(e.target.value);
        props.updateChosenCaseNum(e.target.id);
    }

    return(
        <section className="crimeCases">
            <h2>Your Cases</h2>
            <ul>
                <form action="">
                    <fieldset onChange={handleCaseChange}>
                    {/* Map through the returned crimes-at-location data from API and return crimeFile for each case (from category property) */}
                    {/* -----return crimeFile component (from map)------
                    through props display the crime type and other data */}

                    {/* make this a terinary */}
                    {/* else if (policeApiResult.status === 200 && policeApiResult.data.length === 0) {
                    // return something in that crime list that says you have no open cases
                    alert("you have no open cases");
                    }  */}
                    {/* if this ? (do this) : (else do this) */}
                    {
                        crimeArray.length > 0 ? crimeArray.map((individualCrime) => {
                            // console.log(individualCrime);
                            return <CrimeFile typeOfCrime={individualCrime.category} key={individualCrime.id} caseID={individualCrime.id} locationName={individualCrime.location.street.name}
                            />
                        }) : <p>no open cases</p>
                    }
                    </fieldset>
                </form>
            </ul>
        </section>
    )
};

export default CrimeCases;