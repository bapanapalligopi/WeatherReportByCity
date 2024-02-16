import React from 'react';
import styles from './search.module.css';

export default function Search({ setWeatherData, setLoading, setError, cityName }) {
  const getCityName = (event) => {
    cityName.current = event.target.value;
    if(!cityName.current && cityName.current==null)
    {
        cityName.current="Guntur";
    }
  };

  const getWeatherData = async () => {
    
    if(cityName.current==null) cityName.current="Guntur";
    setLoading(true);
    setError(null);
    try {
      const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.current}&appid=5f67dc802ec850cfc72c89b5b28525fa`);
      if (!Response.ok) throw new Error("Network response not ok");
      const DataFromApi = await Response.json();
     
        setWeatherData(DataFromApi);
       
      
    } catch (error) {
      setError("City name not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.search}>
      <input onChange={(e) => getCityName(e)} type="text" placeholder='Enter your city' className={styles.input} />
      <button onClick={getWeatherData} className={styles.button}>Search</button>
    </div>
  )
}
