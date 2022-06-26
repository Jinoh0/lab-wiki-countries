import { useState } from "react";
import { Routes , Route }  from "react-router-dom";

import { Navbar } from "./components/Navbar/index";
import { CountriesList } from "./components/CountriesList/index";
import { CountriesDetails } from "./components/CountriesDetails/index";

import countries from "./countries.json";

 function App() {

 const [allCountries , setAllCountries] = useState(countries)


  return (
    <div className="App">

        <Navbar />    
   
        <CountriesList 
            allCountries = {allCountries}
        />    
        
        <Routes>
            <Route path="/" element={<CountriesList allCountries={allCountries}/>} />
            <Route path="/:countryDetail" element ={<CountriesDetails allCountries={allCountries}/>} />      
        </Routes>

      </div> 
  );
}

export default App;
