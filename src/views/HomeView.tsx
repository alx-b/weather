import WeatherCard from "../components/weather_card/WeatherCard"

export const HomeView = () => {
    return (
        <div>
            <h1>Home View!</h1>
            <div className="weather-cards">
                <WeatherCard />
            </div>
        </div>
    )
}
