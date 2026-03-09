import axios from "axios"
import { useSelector } from "react-redux"

const currentWeather = async()=>{

    const lat = useSelector(state=> state.weather.lat)
    const lon = useSelector(state=> state.weather.lon)
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY

    // const res = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
   

    try {
         const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=${apiKey}`)
    console.log(res)
        
    } catch (error) {
        console.log(error)
    }

}

export default currentWeather