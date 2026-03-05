import React from "react";

const Country = ({ country }) => {
    if (!country) return null;
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" />
        </div>
    );
}
export default Country;