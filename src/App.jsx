import { useRef, useState } from "react"
import WeatherInfo from "./components/WeatherInfo";
import Search from "./components/Search";
function App() {

  const[WeatherData,setWeatherData]=useState(null);
  const[Loading,setLoading]=useState(false);
  const[Error,setError]=useState(null);
  const cityName=useRef(null);

  return (
    <div className="container">
      <WeatherInfo data={WeatherData} setError={setError}Error={Error}></WeatherInfo>
      <Search setWeatherData={setWeatherData} setLoading={setLoading} setError={setError} cityName={cityName}></Search>
    </div>
  )
}

export default App
