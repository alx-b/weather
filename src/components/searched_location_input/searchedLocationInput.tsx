import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import OpenWeather from "../../api/OpenWeather"
import BackendWeather from "../../api/Backend"
import { updateName, updateLatitude, updateLongitude } from "../../redux/searchedLocation"
import { updateCity, updateTemperature, updateTempFeelsLike, updateTempMin, updateTempMax } from "../../redux/weatherInfo"
import { updateAll } from "../../redux/dayWeather"
import "./searched_location_input.css"

type CityInfo = {
    name: string
    latitude: string
    longitude: string
}

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
        if (searchedLocation.name !== "" && searchedLocation.name !== undefined) {
            await BackendWeather.addCity(searchedLocation)
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
                dispatch(updateCity(city.name))
                dispatch(updateTemperature(response.data.current.temp))
                dispatch(updateTempFeelsLike(response.data.current.feels_like))
                dispatch(updateTempMin(response.data.daily[0].temp.min))
                dispatch(updateTempMax(response.data.daily[0].temp.max))
                dispatch(updateAll(response.data.daily))
                dispatch(updateName(city.name))
                dispatch(updateLatitude(city.latitude))
                dispatch(updateLongitude(city.longitude))
            }
        } catch (error){
            console.log("ERROR ERROR ERROR !!!!!!!")
        }
    }


    const getWeatherForecast = async () => {
        const city = await getLocationFromDatabase()
        console.log("CUTY: ", city)
        if (city === undefined || city.name === undefined){
            console.log("Inside if")
            getOneCallData(await ifCityExistsUpdateLocationAndGetData())
        } else {
            console.log("inside else")
            await getOneCallData(city)
        }
    }


    const displayData = () => {
        return (
            <div className="buttons-input">
                <form className="form-searched-location">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search location..." />
                    <button type="reset" onClick={() => getWeatherForecast()}>Get Weather Forecast</button>
                </form>
                <button type="submit" onClick={() => addLocationToDatabase()}>Add to database</button>
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
