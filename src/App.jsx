import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import fetchCoordinate from './fetchCoordinate.js'
import { useSelector } from 'react-redux'


function App() {
  const [coordinate, setCoordinate] = useState(null)

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  console.log(apiKey)

  const lat = useSelector(state=> state.weather.lat)
  const lon = useSelector(state=> state.weather.lon)

  useEffect(()=>{
    fetchCoordinate()
  },[])

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
