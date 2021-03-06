import { useSelector } from "react-redux"
import "./weather_card.css"

// <h3>Weather {weatherData?.mainWeather}</h3>
// <h3>Description {weatherData?.descriptionWeather}</h3>

const WeatherCard = () => {
    const weatherInfo: any = useSelector<any>(state => state.currentWeatherInfo.current)
    const searchedLocation: any = useSelector<any>(state => state.searchedLocation)
    const currentDayForecast: any = useSelector<any>(state => state.dayWeatherInfo.days[0])


    const getIcon = (icon_id: any) => {
        return `http://openweathermap.org/img/wn/${icon_id}@2x.png`
    }

    const displayData = () => {
        if (searchedLocation.name !== ""){
            return (
                <div className="weather-card">
                    <span className="location">Today in {searchedLocation.name}</span>
                    <div className="weather-card-columns">
                        <div className="col-1">
                            <span className="degree">{Math.round(weatherInfo?.temp)}°C</span>
                            <span className="feels-like">Feels like: {Math.round(weatherInfo?.feels_like)}°C</span>
                        </div>
                        <div className="col-2">
                            <div className="icon-description">
                                <img className="weather-icon" src={getIcon(currentDayForecast?.weather[0]?.icon)} alt="weather icon" />
                                <span>{currentDayForecast?.weather[0]?.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className="weather-card-columns">
                        <div className="col-1">
                            <span>humidity: {weatherInfo?.humidity}%</span>
                            <span>cloudiness: {weatherInfo?.clouds}%</span>
                            <span>visibility: {weatherInfo?.visibility/1000}km</span>
                        </div>
                        <div className="col-2">
                            <div className="stats">
                                <div>
                                    <span className="fa fa-long-arrow-up" aria-hidden="true"></span>
                                    <span className="fa fa-thermometer-three-quarters" aria-hidden="true"></span>
                                    <span>{Math.round(currentDayForecast?.temp?.max)}°C</span>
                                </div>
                                <div>
                                    <span className="fa fa-long-arrow-down" aria-hidden="true"></span>
                                    <span className="fa fa-thermometer-quarter" aria-hidden="true"></span>
                                    <span>{Math.round(currentDayForecast?.temp?.min)}°C</span>
                                </div>
                                <div>
                                    <span className="fa fa-umbrella" aria-hidden="true"></span>
                                    <span>{parseInt(`${currentDayForecast?.pop * 100}`)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <div>
            {displayData()}
        </div>
    )
}

export default WeatherCard
