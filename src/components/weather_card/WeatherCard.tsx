import { useSelector } from "react-redux"
import "./weather_card.css"

// <h3>Weather {weatherData?.mainWeather}</h3>
// <h3>Description {weatherData?.descriptionWeather}</h3>

const WeatherCard = () => {
    const weatherInfo: any = useSelector<any>(state => state.weatherInfo)

//<input onBlur={(e) => dispatch(update(e.target.value))} type="text" placeholder="Change location..." />
    return (
        <div className="weather-card">
            <h1>Currently {weatherInfo?.temperature}°C</h1>
            <h3>Feels like {weatherInfo?.tempFeelsLike}°C</h3>
            <h3>min: {weatherInfo?.tempMin}°C</h3>
            <h3>max: {weatherInfo?.tempMax}°C</h3>
            <h3>{weatherInfo?.city}</h3>
        </div>
    )
}

export default WeatherCard
