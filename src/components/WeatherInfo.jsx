import React from 'react';
import styles from './weatherinfo.module.css';
import humidity from './humidity.png';
import wind from './wind.png';

export default function WeatherInfo({ data, setError, Error }) {
  return (
    <div className={styles.weathercontainer}>
      {!Error && (
        <>
          <marquee behavior="scroll" direction="left">City Name: {data && data.name}</marquee>
          <div className={styles.weatherinfo}>
            <h2>{data && data.name}</h2>
            <img className={styles.icon} src={`https://openweathermap.org/img/wn/${data && data.weather[0].icon.substring(0, 2)}d@2x.png`} alt="icon" />
            <h3>{data && (data.main.temp - 273.15).toFixed(2)}°C</h3>
            <h3>{data && data.weather.map(item => item.description)}</h3>
          </div>

          <div className={styles.weatherparameters}>
            <p><img src={humidity} alt="humidity" className={styles.hum} /><br />{data && data.main.humidity}%</p>
            <p><img src={wind} alt="wind speed" className={styles.win} /><br />{data && ((data.wind.speed) * 3.6).toFixed(2)} Kmph</p>
          </div>
        </>
      )}

      {Error && (
        <div className={styles.error}>
          {Error}
        </div>
      )}
    </div>
  );
}
