
import React from 'react';
import ForecastDisplay from './ForecastDisplay';
import WeatherChart from './WeatherChart'; 
function WeatherDisplay({ weather }) {
  if (!weather) {
    return null;
  }

  if (weather.error) {
    return <p className="text-red-500 mt-4">{weather.error}</p>;
  }

  const { current } = weather;

  return (
    <div className="w-full max-w-md">
      {/* Current Weather */}
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6 mt-8 text-black">
        <h2 className="text-2xl font-bold mb-2">
          {current.name}, {current.sys.country}
        </h2>
        <p className="text-lg">
          Temperature: <span className="font-semibold">{current.main.temp}°C</span>
        </p>
        <p className="text-lg">
          Humidity: <span className="font-semibold">{current.main.humidity}%</span>
        </p>
        <p className="text-lg capitalize">
          Conditions: <span className="font-semibold">{current.weather[0].description}</span>
        </p>
      </div>

     
      <ForecastDisplay forecast={weather.forecast} />
       <WeatherChart forecast={weather.forecast} />
    </div>
  );
}

export default WeatherDisplay;
