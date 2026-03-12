import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { setMin, setMax, setFiveDays } from "../reduxstore/weatherDataSlice.js";
import "../index.css"
function Weatherdashboard() {

    const obj = useSelector(state => state.weather.currentTemp)
    const list = useSelector(state => state.weather.data)

    const description = useSelector(state => state.weather.description)

    const min = useSelector(state => state.weather.min)
    const max = useSelector(state => state.weather.max)
    const fiveDays = useSelector(state => state.weather.fiveDays)

    const dispatch = useDispatch()

    const temp = Math.round(obj?.temp)
    const feels = Math.round(obj?.feels_like)


    const calculateMinMax = (temps)=>{

         let min = temps?.[0]
        let max = temps?.[0]

        for (let i = 1; i < temps?.length; i++) {
            if (temps[i] < min) {
                min = temps[i]
            }
            if (temps[i] > max) {
                max = temps[i]
            }
        }
        const minmax = {
            min: min,
            max: max
        }

        return minmax

    }

    const minmaxTemp = () => {


        const formatted = new Date().toISOString().split('T')[0]
        const temps = list?.reduce((acc, item) => {
            if (item.dt_txt.includes(formatted)) {
                acc.push(Math.round(item.main.temp))
            }
            return acc
        }, [])

        const minmax = calculateMinMax(temps)

       

        dispatch(setMin(minmax.min))
        dispatch(setMax(minmax.max))

    }

    const fiveDayForcast = () => {       //taking out date, checking if date key is undefined then initialize it with empty array, and then push particular item
        const grouped = {}

        list?.forEach((item) => {
            const date = item.dt_txt.split(" ")[0]

            if (!grouped[date]) {
                grouped[date] = []
            }
            grouped[date].push(item)

        })
        dispatch(setFiveDays(grouped))

    }

    console.log(fiveDays)

  


    useEffect(() => {
       

        minmaxTemp()
        fiveDayForcast()
       
    }, [list])



    return obj ? (
        <>
            <div>
                <div className=" min-w-screen relative  bg-black opacity-40 min-h-screen p-3">
                      </div>
               
                    
                    <div className="w-[390px] h-[190px] absolute top-[30px]  border rounded-md bg-black left-[580px] z-10 ">
                        <div className="absolute top-[50px] right-1">
                            <WbSunnyIcon className="text-yellow-300" fontSize="large" />
                            <div className="text-white"> <span className="text-[12px]">feels like: </span>{feels}</div>
                            <div className="text-white text-[12px]">{description}</div>
                        </div>
                        <div>
                            <div className="text-white font-bold absolute top-[70px] left-3">{temp}°C</div>
                            {min && max ?
                                <div>
                                    <div className="absolute top-[90px] left-3 flex gap-4">
                                        <div className="text-white"> <span className="font-bold text-[10px]">min: </span>{min}</div>
                                        <div className="text-white"> <span className="font-bold text-[10px]">max: </span>{max}</div>

                                    </div>

                                </div>
                                : <div>{null}</div>}
                        </div>

                        
                          

                    </div>
                   
                     <div className="flex gap-6 flex-wrap absolute top-[300px] left-[380px] z-10 w-[800px] p-16">
                            {
                                Object.keys(fiveDays).map(date=>{
                                    const temps = fiveDays[date].map(item=> Math.round( item.main.temp))
                                    const dt = fiveDays[date].map(item=> item.dt)
                                    const minmax = calculateMinMax(temps)

                                    return (
                                    <div key={dt}>
                                        <div  className="w-[90px] h-[120px] p-5 border rounded-lg bg-black">
                                            <WbSunnyIcon className="text-yellow-300 ml-3" fontSize="medium" />
                                            <div className="mt-3 ml-1">{`${minmax.max}/${minmax.min}`}</div>
                                            

                                        </div>
                                    </div>
                                )

                                    
                                })
                            }
                        </div>


              
            </div>



        </>
    ) : <div>Loading...</div>
}
export default Weatherdashboard