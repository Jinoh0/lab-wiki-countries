import {useParams} from "react-router-dom";


export function CountriesDetails ({allCountries}) {

    const { countryDetail } = useParams();

    return (
        <>
            {allCountries.filter((currentCountry) => {
                return currentCountry.name.common === countryDetail;
            }).map((currentCountry) => {
                return(
                    <div key={currentCountry.name.common}>
                    <div class="col-7">
            <h1>{currentCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td 
                  style={{width: "30%"}}
                  >
                  Capital</td>
                  <td>{currentCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {currentCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>borders:
                  <td>{currentCountry.borders}</td>
                  <td>
                    <ul>
                      <li><a href={currentCountry.alpha3code}>{currentCountry.name.common}</a></li>                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
                    
                )
            })}


            
        </>
    )
}
