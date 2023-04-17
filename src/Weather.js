import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humiduty: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit"> Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}°C</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
        </ul>
        <p>
          <img src={weather.icon} alt={weather.description} />
        </p>
      </div>
    );
  } else {
    return form;
  }
}
