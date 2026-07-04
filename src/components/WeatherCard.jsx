function WeatherCard({ weather, loading, error}) {

    if(loading) {
      return<p>Loading......</p>
    }

    if(error) {
      return<p>{error}</p>
    }

    if(!weather){
        return<p>Searching for city...</p>
    }

    const iconUrl=`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">

        <h2>{weather.name} - {weather.sys.country}</h2>

        <img
          src={iconUrl}
          alt="Weather Icon"
        />

        <p>{weather.weather[0].description}</p>

        <p>Temperature : {weather.main.temp}°C</p>

        <p>Humidity : {weather.main.humidity}%</p>

        <p>Wind Speed : {weather.wind.speed} m/s</p>
        
    </div>
  )
}

export default WeatherCard;
