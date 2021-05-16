import { useState } from "react"
import "./weather_card.css"


type WeatherInfo = {
    location: string,
    currentTemperature: string,
    lowestExpectedTemperature: string,
    highestExpectedTemperature: string,
}

const WeatherCard = () => {
    const weather = {
        location: "somewhere",
        currentTemperature: "20",
        lowestExpectedTemperature: "15",
        highestExpectedTemperature: "25"
    }

    const [weatherData, setWeatherData] = useState<WeatherInfo>(weather)
    
    return (
        <div className="weather-card">
            <h1>{weatherData.currentTemperature}°C</h1>
            <div className="expected-temperature">
                <h3>{weatherData.lowestExpectedTemperature}°C</h3>
                <h3>{weatherData.highestExpectedTemperature}°C</h3>
            </div>
            <h3>{weatherData.location}</h3>
        </div>
    )
}

export default WeatherCard
