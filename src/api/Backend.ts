import Axios from "axios"

const BackendWeather = Axios.create({
    baseURL: "http://localhost:5001"
})

const getCities = () => {
    return BackendWeather.get("/city")
}

const addCity = (cityData: any) => {
    return BackendWeather.post("/city", cityData)
}

const getCityByName = (name: string) => {
    return BackendWeather.get(`/city/${name}`)
}


const getOpenWeatherAPIKey = () => {
    return BackendWeather.get("/api")
}

const backendWeather = {
    getCities,
    getCityByName,
    addCity,
    getOpenWeatherAPIKey
}

export default backendWeather
