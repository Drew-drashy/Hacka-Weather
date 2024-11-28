

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function WeatherChart({ forecast }) {
  if (!forecast) {
    return null;
  }

  
  const data = forecast.list.slice(0, 8).map((item) => ({
    time: item.dt_txt.split(' ')[1].slice(0, 5),
    temp: item.main.temp,
  }));

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-white mb-4">Temperature Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#34d399" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherChart;
