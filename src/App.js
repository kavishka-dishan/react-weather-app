import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
const API_KEY = process.env.REACT_APP_API_KEY;

function App(){

  const[city, setCity] = useState("");
  const[weather, setWeather] = useState(null);
  const[error, setError] = useState("");
  const[loading, setLoading] = useState(false);


  useEffect(() => {
    console.log("Effect Run")
  },[city, weather]);

  //Search Weather Function, await use කරනවා නම් function එක async වෙන්නම ඕන. "   API  "
 const searchWeather = async () => {

  try{
    if(city.trim() === "" ) {
      setError("Please Enter City");
      return;
    }

    setLoading(true); // Start Loading
    setError("");  // Clear Old Error
    
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    const response = await fetch(url);
    console.log("Res",response);

    if(!response.ok){
      throw new Error("City Not Found");
    }

    const data = await response.json();
    console.log("Data:",data);
    console.log(API_KEY);

    setWeather(data);
    

  }catch(error){

    setError(error.message);

  }finally{

    setLoading(false);

  }


 }

  return(
    <div className="app">
      <h1>Weather App</h1>

      <SearchBar city={city} setCity={setCity} searchWeather={searchWeather}/>
      <WeatherCard weather={weather} loading={loading} error={error}/>

    </div>
  );
}

export default App;