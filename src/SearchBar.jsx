import React, {usestate} from "react";

const SearchBar = ({ onSearch }) => {
    const [countryName, setCountryName] = usestate("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (countryName.trim() === "") return;
        onSearch(countryName.trim());
        setCountryName(""); 
    }
}
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            placeholder="Enter country name"
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;