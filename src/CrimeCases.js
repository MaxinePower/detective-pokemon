// CrimeCases
import CrimeFile from "./CrimeFile";
import axios from "axios";
import { useEffect, useState } from "react";

function CrimeCases() {
    const [crimeArray, setCrimeArray] = useState([])
    useEffect(() => {
        axios({
            url: 'https://data.police.uk/api/crimes-at-location',
            params: {
                location_id: 538862
            }
        }).then((policeApiResult) => {
            const locationResults = policeApiResult.data;
            setCrimeArray(locationResults)
        })
    }, [])
    return(
        <section>
            <ul>
                {/* <CrimeFile /> */}
                {
                    crimeArray.map((individualCrime) => {
                        return <CrimeFile typeOfCrime={individualCrime.category}/>
                    })
                }
            </ul>
        </section>
    )
};

export default CrimeCases;