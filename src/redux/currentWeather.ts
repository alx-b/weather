import { createSlice } from "@reduxjs/toolkit"

export const currentWeatherInfoSlice = createSlice({
    name: 'currentWeatherInfo',
    initialState: {
        current: {}
    },
    reducers: {
        updateCurrentWeather: (state, action) => {
            state.current = action.payload
        },
    }
})

export const { updateCurrentWeather } = currentWeatherInfoSlice.actions

export default currentWeatherInfoSlice.reducer
