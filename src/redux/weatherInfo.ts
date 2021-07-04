import { createSlice } from "@reduxjs/toolkit"

export const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: {
        city: "",
        temperature: "",
        tempFeelsLike: "",
        tempMin: "",
        tempMax: ""
    },
    reducers: {
        updateCity: (state, action) => {
            state.city = action.payload
        },
        updateTemperature: (state, action) => {
            state.temperature = action.payload
        },
        updateTempFeelsLike: (state, action) => {
            state.tempFeelsLike = action.payload
        },
        updateTempMin: (state, action) => {
            state.tempMin = action.payload
        },
        updateTempMax: (state, action) => {
            state.tempMax = action.payload
        }
    }
})

export const { updateCity, updateTemperature, updateTempFeelsLike, updateTempMin, updateTempMax } = weatherInfoSlice.actions

export default weatherInfoSlice.reducer
