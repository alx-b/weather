import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import OpenWeather from "../../api/OpenWeather"
import "./five_days_weather_card.css"


type FiveDaysWeatherInfo = {
    date: string,
    time: string,
    currentTemperature: string,
    temperatureFeelsLike: string,
}

const FiveDaysWeatherCard = () => {
    const searchedLocation: any = useSelector<any>(state => state.searchedLocation.name)
    const [weatherData, setWeatherData] = useState<FiveDaysWeatherInfo[]>([])

    useEffect(() => {
        const fetchData = async () => {
            await OpenWeather.getFiveDaysWeatherInCity(searchedLocation)
                .then(response => {
                    for (const item of response.data.list){
                            const dateTime = item.dt_txt.split(' ')
                        setWeatherData((weatherData: FiveDaysWeatherInfo[]) => ([...weatherData, {
                            date: dateTime[0],
                            time: dateTime[1].slice(0, -3),
                            currentTemperature: item.main.temp,
                            temperatureFeelsLike: item.main.feels_like
                        }]))
                    }
                })
                .catch(error => { console.log("ERROR: " + error) })
        }
        fetchData()
    }, [searchedLocation])


    const displayData = () => {
        return (
            weatherData.map((item: FiveDaysWeatherInfo) => (
                <div key={item?.date+item?.time} className="lilsomethin">
                    <h5>{item?.time}<br/>{item?.date}</h5>
                    <h5>{item?.currentTemperature}°C / {item?.temperatureFeelsLike}°C</h5>
                </div>
            ))
        )
    }

//<input onBlur={(e) => dispatch(update(e.target.value))} type="text" placeholder="Change location..." />
    
    return (
        <div className="somethin">
            {displayData()}
        </div>
    )
}

export default FiveDaysWeatherCard
