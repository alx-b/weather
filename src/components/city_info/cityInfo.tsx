import { useSelector } from "react-redux"

const CityInfo = () => {

    const cityInfo: any = useSelector<any>(state => state.searchedLocation)

    return (
        <div>
            <div>City: {cityInfo?.name}</div>
            <div>Latitude: {cityInfo?.latitude}</div>
            <div>Longitude: {cityInfo?.longitude}</div>
        </div>
    )
}

export default CityInfo
