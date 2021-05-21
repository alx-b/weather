import { configureStore } from '@reduxjs/toolkit'
import locationReducer from "./location"

export default configureStore({
    reducer: {
        location: locationReducer
    },
    
})
