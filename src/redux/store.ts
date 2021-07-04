import { configureStore } from '@reduxjs/toolkit'
import searchedLocationReducer from "./searchedLocation"
import weatherInfoReducer from "./weatherInfo"
import dayWeatherInfoReducer from "./dayWeather"

export default configureStore({
    reducer: {
        searchedLocation: searchedLocationReducer,
        weatherInfo: weatherInfoReducer,
        dayWeatherInfo: dayWeatherInfoReducer
    },
})
