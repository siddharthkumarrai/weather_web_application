import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import "./WeatherApp.css"
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        name: "Delhi",
        feelslike: 23.32 ,
        humidity: 31 ,   
        temp: 24.05 ,
        temp_max: 24.05,
        temp_min: 24.05,
        weather: "haze",
});

let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
}

    return(
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SearchBox  updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}  