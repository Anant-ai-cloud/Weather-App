import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setTemp, setVisibility, setWind } from './reduxstore/weatherDataSlice.js'


function App() {
  const [coordinate, setCoordinate] = useState(null)

  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)

  const data = useSelector(state => state.weather.data)

  const dispatch = useDispatch()

  const currentWeather = async (lat, lon) => {

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    try {

       const res1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      console.log(res1)

      dispatch(setTemp(res1.data.main))
      dispatch(setWind(res1.data.wind))
      dispatch(setVisibility(res1.data.visibility))

      const list = res2.data.list
      const report = list.map((item) =>
        item.main)

      dispatch(setData(report))



    } catch (error) {
      console.log(error)
    }

  }
  console.log(data)
  const fetchCoordinate = async () => {


    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    try {

      const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Noida,IN&limit=5&appid=${apiKey}`)


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
      currentWeather(lat, lon)
    }

  }, [lat, lon])



  console.log(lat)
  console.log(lon)



  return (
    <>
      <div className='text-white'>
        This is Weather App
      </div>
    </>
  )
}

export default App
