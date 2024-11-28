

import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      setWeather({
        current: weatherResponse.data,
        forecast: forecastResponse.data,
      });

      setCity('');
    } catch (error) {
      console.error(error);
      setWeather({ error: 'City not found. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Weather Dashboard</h1>
      <form
        onSubmit={getWeather}
        className="flex flex-col items-center w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 rounded-md text-gray-700 focus:outline-none mb-4"
        />
        <button
          type="submit"
          className="w-full bg-white text-blue-500 font-semibold py-2 rounded-md hover:bg-gray-100 transition duration-200"
        >
          Get Weather
        </button>
      </form>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
