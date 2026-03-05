import { useState } from 'react'
import SearchBar from './SearchBar'
import Country from './Country'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const handleSearch = async (countryName) => {
    setError(null);
    try {
      const response = await fetch(`https://www.apicountries.com/countries/${name}`);
      if (response.data && response.data.length > 0) {
        const c = response.data[0];
        setCountry({
          name: c.name,
          officialName: c.officialNameEnglish,
          citizenship: c.citizenship,
          capital: c.capital,
          continent: c.continent,
          population: c.population,
          landmass: c.landmass,
          timezones: c.timezones,
          flag: c.flag,
          currencies: c.currencies,
          languages: c.languages,
        });
      } else {
        setError("Country not found");
        setCountry(null);
      }
    } catch (err) {
      setError("Error fetching country data");
      setCountry(null);
    } 
    return (
      <div className="App">
        <h1>Country Info</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {country && <Country country={country} />}
      </div>  
    );
  } 
export default App;
