import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import OpenWeather from "../../api/OpenWeather"
import BackendWeather from "../../api/Backend"
import { updateAllValue } from "../../redux/searchedLocation"
import { updateCurrentWeather } from "../../redux/currentWeather"
import { updateAll } from "../../redux/dayWeather"
import "./searched_location_input.css"
import { CityInfo } from "../../types"

const SearchedLocationInput = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const dispatch = useDispatch()
    const searchedLocation: any = useSelector<any>(state => state.searchedLocation)


    const getLocationFromDatabase = async () => {
        try {
            const response = await BackendWeather.getCityByName(inputValue)
            console.log(response)
            return {
                name: response.data.name,
                latitude: response.data.latitude,
                longitude: response.data.longitude
            }
        } catch (error) {
            console.log("ERROR, not in Database")
        }
    }


    const ifCityExistsUpdateLocationAndGetData = async () => {
        try {
            const response = await OpenWeather.getCurrentWeatherInCity(inputValue)
            console.log(response)
            return {
                name: response.data.name,
                latitude: response.data.coord.lat,
                longitude: response.data.coord.lon
            }
        } catch {
            console.log("ERROR, City does not exist")
        }
    }
    

    const addLocationToDatabase = async () => {
        try {
            await BackendWeather.addCity(searchedLocation)
        } catch (error) {
            console.log("Error: ", error.message)
        }
    }


    const getOneCallData = async (city: CityInfo|undefined) => {
        try {
            if (city !== undefined) {
                const response = await OpenWeather.getWeatherByLatitudeAndLongitude(
                    String(city.latitude).slice(0, -3),
                    String(city.longitude).slice(0, -3)
                )
                console.log(response)
                dispatch(updateCurrentWeather(response.data.current))
                dispatch(updateAll(response.data.daily))
                dispatch(updateAllValue(city))
            }
        } catch (error){
            console.log("ERROR ERROR ERROR !!!!!!!")
        }
    }


    const getWeatherForecast = async () => {
        const city = await getLocationFromDatabase()
        if (city === undefined || city.name === undefined){
            getOneCallData(await ifCityExistsUpdateLocationAndGetData())
        } else {
            await getOneCallData(city)
        }
    }


    const displayData = () => {
        return (
            <div className="buttons-input">
                <form className="form-searched-location">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search location..." />
                    <button type="reset" onClick={() => getWeatherForecast()}>Get Weather Forecast</button>
                    <button type="button" onClick={() => addLocationToDatabase()}>Save Location</button>
                </form>
            </div>
        )
    }


    return (
        <div>
            {displayData()}
        </div>
    )
}

export default SearchedLocationInput
