

import React from 'react';

function ForecastDisplay({ forecast }) {
  if (!forecast) {
    return null;
  }

  // Extract forecast data for the next 3 days at 12:00 PM
  const forecastItems = forecast.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  ).slice(0, 3);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-black mb-4">3-Day Forecast</h3>
      <div className="grid grid-cols-1 gap-4">
        {forecastItems.map((item) => (
          <div
            key={item.dt}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-4 text-black"
          >
            <p className="font-semibold">
              {new Date(item.dt * 1000).toLocaleDateString()}
            </p>
            <p>Temp: {item.main.temp}°C</p>
            <p className="capitalize">Conditions: {item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastDisplay;
