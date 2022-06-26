import { Link } from "react-router-dom";

export function CountriesList ({allCountries}) {
    console.log (allCountries)
        return (
            <>
                {allCountries.map((currentCountry) => {
                    return (                        
                        <div class="container">
                        <div class="column">
                        <Link to={currentCountry.name.common}>
                        <img src ={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`} alt = ""/>
                        {currentCountry.name.common}
                        </Link>
                        </div>
                        </div>
                    )
                })}
                
            </>
        )
    }