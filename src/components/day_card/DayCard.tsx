import { useSelector } from "react-redux"
import "./day_card.css"

type DayWeatherInfo = {
    date: string,
    time: string,
    currentTemperature: string,
    temperatureFeelsLike: string,
}

const DayWeatherCard = () => {
    const dayWeatherInfo: any = useSelector<any>(state => state.dayWeatherInfo)

    const convertToDate = (unixDateTime: any) => {
        const date = new Date(unixDateTime * 1000)
        //return `${('0' + date.getDate()).slice(-2)}.${('0' + date.getMonth()).slice(-2)}.${date.getFullYear()}`
        //return date.toLocaleDateString()
        return date.toDateString()
    }

    const getIcon = (icon_id: any) => {
        return `http://openweathermap.org/img/wn/${icon_id}@2x.png`
    }

    const displayData = () => {

        return (
            dayWeatherInfo.days.map((item: any) => (
                <div key={item?.dt+item?.temp?.day} className="day">
                    <span className="date">{convertToDate(item?.dt)}</span>
                    <div className="icon-description">
                        <img className="weather-icon" src={getIcon(item?.weather[0]?.icon)} alt="weather icon" />
                        <span>{item?.weather[0]?.description}</span>
                    </div>
                    <span className="temp">{Math.round(item?.temp?.day)}°C</span>
                    <div className="stats">
                    <div><span className="fa fa-long-arrow-up" aria-hidden="true"></span> <span className="fa fa-thermometer-three-quarters" aria-hidden="true"></span> {Math.round(item?.temp?.max)}°C</div>
                    <div><span className="fa fa-long-arrow-down" aria-hidden="true"></span> <span className="fa fa-thermometer-quarter" aria-hidden="true"></span> {Math.round(item?.temp?.min)}°C</div>
                    <div><span className="fa fa-umbrella" aria-hidden="true"></span> {parseInt(`${item?.pop * 100}`)}%</div>
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className="daily">
            {displayData()}
        </div>
    )

}

export default DayWeatherCard
