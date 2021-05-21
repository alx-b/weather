import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import OpenWeather from "../../api/OpenWeather"
import "./weather_card.css"
import { update } from "../../redux/location"


type WeatherInfo = {
    currentTemperature: string,
    temperatureFeelsLike: string,
    mainWeather: string,
    descriptionWeather: string
}

const WeatherCard = () => {
    const location = String(useSelector<any>(state => state.location.value))
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState<string>("")


    const [weatherData, setWeatherData] = useState<WeatherInfo>({
        currentTemperature: "",
        temperatureFeelsLike: "",
        mainWeather: "",
        descriptionWeather: ""
    })


    const ifCityExistsUpdateLocation = async () => {
        if (await OpenWeather.getCurrentWeatherInCity(inputValue)) {
            dispatch(update(inputValue))
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            await OpenWeather.getCurrentWeatherInCity(location)
                .then(response => {
                    setWeatherData({
                        currentTemperature: response.data.main.temp,
                        temperatureFeelsLike: response.data.main.feels_like,
                        mainWeather: response.data.weather[0].main,
                        descriptionWeather: response.data.weather[0].description
                    })
                    //dispatch(update(response.data.name))
                    console.log(response.data)
                })
                .catch(error => {
                    console.log("ERROR: " + error)
                })
        }
        
        fetchData()
    }, [location])


//<input onBlur={(e) => dispatch(update(e.target.value))} type="text" placeholder="Change location..." />
    return (
        <div className="weather-card">
            <h1>Currently {weatherData?.currentTemperature}°C</h1>
            <h3>Feels like {weatherData?.temperatureFeelsLike}°C</h3>
            <h3>Weather {weatherData?.mainWeather}</h3>
            <h3>Description {weatherData?.descriptionWeather}</h3>
            <h3>{location}</h3>
            <form>
            <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Change location..." />
            <button type="reset" onClick={() => ifCityExistsUpdateLocation()}>Submit</button>
            </form>
        </div>
    )
}

export default WeatherCard
