import { createSlice } from "@reduxjs/toolkit"
import { CityInfo } from "../types"

const initialState: CityInfo = {name: "", latitude: "", longitude: ""}

export const searchedLocationSlice = createSlice({
    name: 'searchedLocation',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateLatitude: (state, action) => {
            state.latitude = action.payload
        },
        updateLongitude: (state, action) => {
            state.longitude = action.payload
        },
        updateAllValue: (_, action) => {
            return action.payload
        },
        updateOnlyChangingValue: (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

export const { updateName, updateLatitude, updateLongitude, updateAllValue, updateOnlyChangingValue } = searchedLocationSlice.actions

export default searchedLocationSlice.reducer
