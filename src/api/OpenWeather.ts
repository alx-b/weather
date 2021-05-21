import Axios from "axios"

const OpenWeather = Axios.create({
    baseURL: "http://api.openweathermap.org",
    headers: {"Content-Type": "application/json"}
})

const getCurrentWeatherInCity = (city: string) => {
    return OpenWeather.get("/data/2.5/weather?", {
        params: {
            q: city,
            appid: process.env.REACT_APP_API_KEY,
            units: "metric"
        }
    })
}

const getFiveDaysWeatherInCity = (city: string) => {
    return OpenWeather.get("/data/2.5/forecast?", {
        params: {
            q: city,
            appid: process.env.REACT_APP_API_KEY,
            units: "metric"
        }
    })
}

const getWeatherByLatitudeAndLongitude = (lat: string, lon: string) => {
    return OpenWeather.get("/data/2.5/onecall?", {
        params: {
            lat: lat,
            lon: lon,
            appid: process.env.REACT_APP_API_KEY,
            units: "metric",
            excluse: "minutely,alerts"
        }
    })
}

const openWeather = {
    getCurrentWeatherInCity,
    getFiveDaysWeatherInCity,
    getWeatherByLatitudeAndLongitude,
}

export default openWeather

