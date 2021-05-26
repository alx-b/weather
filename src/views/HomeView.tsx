import WeatherCard from "../components/weather_card/WeatherCard"
import SearchedLocationInput from "../components/searched_location_input/searchedLocationInput"

export const HomeView = () => {
    return (
        <div>
            <h1>Today</h1>
            <div className="weather-cards">
                <WeatherCard />
                <SearchedLocationInput />
            </div>
        </div>
    )
}
