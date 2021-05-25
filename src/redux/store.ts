import { configureStore } from '@reduxjs/toolkit'
import searchedLocationReducer from "./searchedLocation"
import weatherInfoReducer from "./weatherInfo"

export default configureStore({
    reducer: {
        searchedLocation: searchedLocationReducer,
        weatherInfo: weatherInfoReducer
    },
})
