// CrimeCases
import CrimeFile from "./CrimeFile";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function CrimeCases(props) {
    const [crimeArray, setCrimeArray] = useState([]);
    const [crimeLoading, setCrimeLoading] = useState(true);

    const crimeRef = useRef(null);
    useEffect(()=> {
        if (props.showCrimeCases) {
            crimeRef.current.scrollIntoView();
        }
    }, [props.showCrimeCases]);

    useEffect(() => {
        if (props.currentChosenLocation !== "") {
            // Make an axios call to UK Police API using chosenLocation data to retrieve list of crimes in that area
            axios({
                url: 'https://data.police.uk/api/crimes-at-location',
                params: {
                    // date to test for errors
                    // date: "2021-08",
                    location_id: props.currentChosenLocation
                }
            }).then((policeApiResult) => {
                setCrimeLoading(true);
                if (policeApiResult.status === 200) {
                    // save the returned data in state
                    const locationResults = policeApiResult.data;
                    setCrimeArray(locationResults);
                    setCrimeLoading(false);
                } else {
                    throw new Error("The API response didn't return the data we were looking for. Please try again later.");
                }
            }).catch(function() {
                alert("Your request can't be completed, check the console for more detail.")
            });
        } 
    // CrimeCases is only called AFTER submit of the button in location drop-down   
    }, [props.currentChosenLocation])

    const handleCaseChange = (e) => {
        // chosen crime gets stored in state/is updated a state thats higher up in the level (App.js)
        props.updateChosenCrimeType(e.target.value);
        props.updateChosenCaseNum(e.target.id);
        props.pokemonState(true)
    }

    // --------THIS IS NOT ACCESIBLE! AN LI BETWEEN THE FIELDSET ND THE INPUTS IS A BIG PROBLEM!!!!!! REDO TO BUTTONS LIKE POKEMON SELECTIONS
    return (
        <section className="crimeCases" ref={crimeRef}>
            <h2 id="crimeCases">Your Cases</h2>
            <p className="instruction">Select an active case from the files below.</p>
            <ul>
                <form action="">
                    <fieldset onChange={handleCaseChange}>
                    {/* Map through the returned crimes-at-location data from API and return crimeFile for each case (from category property) */}
                    {/* -----return crimeFile component (from map)------
                    through props display the crime type and other data */}
                    {
                        crimeLoading
                        ? <p>Loading Cases</p>
                        : null
                    }   
                    {
                        crimeArray.length > 0
                        ? crimeArray.map((individualCrime) => {
                            return <CrimeFile typeOfCrime={individualCrime.category} key={individualCrime.id} caseID={individualCrime.id} locationName={individualCrime.location.street.name} 
                        />
                        })
                        : null
                    }
                    </fieldset>
                </form>
            </ul>
        </section>
    )
};
export default CrimeCases;