import React, { useState, useEffect } from 'react';
import { getCurrLoc } from './backend/location';

const OPENWEATHERMAP_API_KEY = '764cef1fe71ca6f8ee1da387fffba7cf';

function WeatherComponent() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const coords = await getCurrLoc();
        const { latitude, longitude } = coords.coords;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=imperial`;

        const response = await fetch(url);
        const data = await response.json();
        setTemperature(data.main.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
  }, []);

  // Return JSX. Conditionally render temperature or loading state.
  return temperature ? <span>{temperature} °F</span> : <span>Loading temperature...</span>;
}

export default WeatherComponent;
