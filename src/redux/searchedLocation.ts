import { createSlice } from "@reduxjs/toolkit"

export const searchedLocationSlice = createSlice({
    name: 'searchedLocation',
    initialState: {
        name: "",
        latitude: "",
        longitude: ""
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateLatitude: (state, action) => {
            state.latitude = action.payload
        },
        updateLongitude: (state, action) => {
            state.longitude = action.payload
        }
    }
})

export const { updateName, updateLatitude, updateLongitude } = searchedLocationSlice.actions

export default searchedLocationSlice.reducer
