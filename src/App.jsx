import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setTemp, setVisibility, setWind } from './reduxstore/weatherDataSlice.js'
import Weatherdashboard from './components/Weatherdashboard.jsx'


function App() {
  const [coordinate, setCoordinate] = useState(null)

  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)

  const data = useSelector(state => state.weather.data)
  const temp = useSelector(state=> state.weather.currentTemp)
  const visibility = useSelector(state=> state.weather.visibility)
  const wind = useSelector(state=> state.weather.wind)

  const dispatch = useDispatch()

  const weatherData = async (lat, lon) => {

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    try {

       const res1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
     

      dispatch(setTemp(res1.data.main))
      dispatch(setWind(res1.data.wind))
      dispatch(setVisibility(res1.data.visibility))

      const list = res2.data.list
    

      dispatch(setData(list))



    } catch (error) {
      console.log(error)
    }

  }
  console.log(data)
  console.log(temp)
  console.log(wind)
  console.log(visibility)

  const fetchCoordinate = async () => {


    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    try {

      const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Dankaur,IN&limit=5&appid=${apiKey}`)


      console.log(res)

      setLat(res.data[0].lat)
      setLon(res.data[0].lon)



    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchCoordinate()
  }, [])


  useEffect(() => {
    if (lat && lon) {
      weatherData(lat, lon)
    }

  }, [lat, lon])



  console.log(lat)
  console.log(lon)



  return (
    <>
     <Weatherdashboard/>
    </>
  )
}

export default App
