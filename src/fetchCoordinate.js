import { useDispatch } from "react-redux"
import { setLat, setLon } from "./reduxstore/weatherDataSlice"

const fetchCoordinate = async()=>{
    const dispatch = useDispatch()
      try {
        
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Delhi,IN&limit=5&appid=${apiKey}`)
        console.log(res)
        
        dispatch(setLat(res.data[0].lat))
        dispatch(setLon(res.data[0].lon))
        
        
      } catch (error) {
        console.log(error)
      }
    }

export default fetchCoordinate