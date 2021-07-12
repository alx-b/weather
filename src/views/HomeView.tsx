import WeatherCard from "../components/weather_card/WeatherCard"
import DayCard from "../components/day_card/DayCard"
import SearchedLocationInput from "../components/searched_location_input/searchedLocationInput"

export const HomeView = () => {
    return (
        <div>
            <div className="weather-cards">
                <SearchedLocationInput />
                <WeatherCard />
                <DayCard />
            </div>
        </div>
    )
}
