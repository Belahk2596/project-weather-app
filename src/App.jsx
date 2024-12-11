import React from "react";
import "./App";
import { useState } from "react";

function App() {
  const [forecast, setForecast] = useState();

  async function weatherUpdate() {
    const response = await fetch (
      "https://api.open-meteo.com/v1/forecast" +
        "?latitude=-36.86&longitude=174.77" +
        "&daily=temperature_2m_max,temperature_2m_min"
    )
     if (response.ok) {
      let data = await response.json();
      setForecast(data);
     }
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-center my-7">Weather App</h1>
      <div className="border-2 h-[400px] w-[600px] rounded-md flex flex-col items-center justify-evenly">
        <div className="my-2 text-2xl">Location: Auckland</div>
        <div className="my-2 text-2xl">Current Weather: High - {forecast ? forecast.daily.temperature_2m_max[0] + " C": "Loading"} Low - {forecast ? forecast.daily.temperature_2m_min[0] + " C" : "Loading"}</div>
        <button
          onClick={weatherUpdate}
          className="bg-gray-200 rounded p-2 text-[2rem] hover:bg-yellow-400 hover:text-white "
        >
          Check Weather
        </button>
      </div>
    </div>
  );
}

export default App;
