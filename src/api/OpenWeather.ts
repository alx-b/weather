import Axios from "axios"
import BackendWeather from "./Backend"

const OpenWeather = Axios.create({
    baseURL: "http://api.openweathermap.org",
    headers: {"Content-Type": "application/json"}
})

const getAPIKey = async () => {
    const response = await BackendWeather.getOpenWeatherAPIKey()
    return response.data.apikey
}

const getCurrentWeatherInCity = async (city: string) => {
    return await OpenWeather.get("/data/2.5/weather?", {
        params: {
            q: city,
            appid: await getAPIKey(),
            units: "metric"
        }
    })
}

const getFiveDaysWeatherInCity = async (city: string) => {
    return await OpenWeather.get("/data/2.5/forecast?", {
        params: {
            q: city,
            appid: await getAPIKey(),
            units: "metric"
        }
    })
}

const getWeatherByLatitudeAndLongitude = async (lat: string, lon: string) => {
    return await OpenWeather.get("/data/2.5/onecall?", {
        params: {
            lat: lat,
            lon: lon,
            appid: await getAPIKey(),
            units: "metric",
            exclude: "minutely,alerts"
        }
    })
}

const openWeather = {
    getCurrentWeatherInCity,
    getFiveDaysWeatherInCity,
    getWeatherByLatitudeAndLongitude,
}

export default openWeather

