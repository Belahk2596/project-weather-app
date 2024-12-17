import React from "react";
import "./App";
import { useState, useEffect} from "react";

function App() {
  const [forecast, setForecast] = useState();

  async function weatherUpdate() {
    const response = await fetch (
      "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={'88d43c40331df6f9a4ce5d298efb86d2'}"
    //   "https://api.open-meteo.com/v1/forecast" +
    //     "?latitude=-36.86&longitude=174.77" +
    //     "&daily=temperature_2m_max,temperature_2m_min"
        )
     if (response.ok) {
      let data = await response.json();
      setForecast(data);
      console.log(data);
     }
  }

  // useEffect(() => {
  //    const interval = setInterval(() => {
  //     weatherUpdate();
  //     //console.log('Hello')
  //    }, 5000)
  // })
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-center my-7"><b>W</b>eather <span className="text-yellow-500"><b>A</b>pp</span></h1>
      <div className="bg-gray-50 border-2 h-[400px] w-[600px] rounded-md flex flex-col items-center justify-evenly">
        <div className="text-2xl"><b>Location:</b></div>
        <div className="text-4xl text-blue-300">Auckland</div>
        <div className="text-2xl"><b>Current Weather:</b></div>
        <div className="text-xl"> <b>High</b> - {forecast ? forecast.daily.temperature_2m_max[0] + "C": "Loading"} <b>Low</b> - {forecast ? forecast.daily.temperature_2m_min[0] + "C" : "Loading"}</div>
        <button
          onClick={weatherUpdate}
          className="bg-blue-100 rounded p-2 text-[2rem] hover:bg-yellow-400 hover:text-white hover:h-[70px] hover:w-[250px] hover:font-bold"
        >
          Check Weather
        </button>
      </div>
    </div>
  );
}

export default App;
