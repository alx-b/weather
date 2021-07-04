import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const dayWeatherInfoSlice = createSlice({
    name: 'dayWeatherInfo',
    initialState: {
        days: []
    },
    reducers: {
        updateAll: (state, action: PayloadAction<any>) => {
            state.days = action.payload
        },
    }
})

export const { updateAll } = dayWeatherInfoSlice.actions

export default dayWeatherInfoSlice.reducer
