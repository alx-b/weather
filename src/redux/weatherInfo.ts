import { createSlice } from "@reduxjs/toolkit"

export const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: {
        city: "",
        temperature: "",
        tempFeelsLike: ""
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
        }
    }
})

export const { updateCity, updateTemperature, updateTempFeelsLike } = weatherInfoSlice.actions

export default weatherInfoSlice.reducer
