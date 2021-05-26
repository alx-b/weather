import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import OpenWeather from "../../api/OpenWeather"
import BackendWeather from "../../api/Backend"
import { updateName, updateLatitude, updateLongitude } from "../../redux/searchedLocation"
import { updateCity, updateTemperature, updateTempFeelsLike } from "../../redux/weatherInfo"

type CityInfo = {
    name: string
//    state: string
//    country: string
    latitude: string
    longitude: string
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// MAKE A SECOND INPUT THAT LOOK ONLY IN DATABASE
// AND THE FIRST INPUT ONLY TO DO OPENWEATHER CALL
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const SearchedLocationInput = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const dispatch = useDispatch()
    const searchedLocation: any = useSelector<any>(state => state.searchedLocation)


    const getLocationFromDatabase = async () => {
        await BackendWeather.getCityByName(inputValue)
            .then(response => {
                console.log(response)
                dispatch(updateName(response.data.name))
                dispatch(updateLatitude(response.data.latitude))
                dispatch(updateLongitude(response.data.longitude))
                getOneCallData(response.data)
            })
            .catch(error => {
                console.log("ERROR, not in Database")
            })
    }


    const ifCityExistsUpdateLocationAndGetData = async () => {
        await OpenWeather.getCurrentWeatherInCity(inputValue)
            .then(response => {
                console.log(response)
                dispatch(updateName(response.data.name))
                dispatch(updateLatitude(response.data.coord.lat))
                dispatch(updateLongitude(response.data.coord.lon))
                const city = {
                    name: response.data.name,
                    latitude: response.data.coord.lat,
                    longitude: response.data.coord.lon
                }
                getOneCallData(city)
            })
            .catch(error => {
                console.log("ERROR, City does not exist")
            })
    }
    

    const addLocationToDatabase = async () => {
        if (searchedLocation.name !== "") {
            await BackendWeather.addCity(searchedLocation)
        }
    }


    const getOneCallData = async (city: any) => {
        if (inputValue !== "") {
            await OpenWeather.getWeatherByLatitudeAndLongitude(
                String(city.latitude).slice(0, -3),
                String(city.longitude).slice(0, -3)
            )
                .then(response => {
                    console.log(response.data)
                    dispatch(updateCity(city.name))
                    dispatch(updateTemperature(response.data.current.temp))
                    dispatch(updateTempFeelsLike(response.data.current.feels_like))
                })
                .catch(error => { console.log("ERROR ERROR ERROR !!!!!!!") })
        }
    }


    const displayData = () => {
        return (
            <div>
                <form className="form-searched-location">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search location..." />
                    <button type="reset" onClick={() => ifCityExistsUpdateLocationAndGetData()}>Get from API</button>
                    <button type="reset" onClick={() => getLocationFromDatabase()}>Get from Database</button>
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
