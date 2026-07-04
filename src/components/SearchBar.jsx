function SearchBar({city, setCity, searchWeather}){
    return(
        <div className="search-bar">

            <input
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={searchWeather}>Search</button>
            
        </div>
    );
}

export default SearchBar;