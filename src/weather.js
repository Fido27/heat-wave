async function fetchWeather(latitude, longitude) {
    const apiKey = process.env.REACT_APP_TEMP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.main.temp;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
}

export { fetchWeather };
