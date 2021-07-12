import { configureStore } from '@reduxjs/toolkit'
import searchedLocationReducer from "./searchedLocation"
import currentWeatherInfoReducer from "./currentWeather"
import dayWeatherInfoReducer from "./dayWeather"

export default configureStore({
    reducer: {
        searchedLocation: searchedLocationReducer,
        currentWeatherInfo: currentWeatherInfoReducer,
        dayWeatherInfo: dayWeatherInfoReducer
    },
})
