import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { setMin, setMax } from "../reduxstore/weatherDataSlice.js";
import "../index.css"
function Weatherdashboard() {

    const obj = useSelector(state => state.weather.currentTemp)
    const list = useSelector(state => state.weather.data)
    const min = useSelector(state=> state.weather.min)
    const max = useSelector(state=> state.weather.max)

    const dispatch = useDispatch()

    const temp = Math.round(obj?.temp)
    const feels = Math.round(obj?.feels_like)

    const minmaxTemp = () => {

        const formatted = new Date().toISOString().split('T')[0]
        const temps = list?.reduce((acc, item) => {
            if (item.dt_txt.includes(formatted)) {
                acc.push(Math.round(item.main.temp))
            }
            return acc
        }, [])

        console.log(temps)

        let min = temps?.[0]
        let max = temps?.[0]

        for( let i = 1; i<temps?.length; i++){
            if(temps[i]< min){
                min = temps[i]
            }
            if(temps[i]> max){
                max = temps[i]
            }
        }

        
        dispatch(setMin(min))
        dispatch(setMax(max))

    }


  useEffect(()=>{

    minmaxTemp()
  },[list])



    return obj ? (
        <>
            <div>
                <div className="w-[390px] h-[190px] ml-[600px] relative mt-3 border rounded-md">
                    <div>
                        <div className="absolute top-[50px] right-1">
                            <WbSunnyIcon className="text-yellow-300" fontSize="large" />
                            <div className="text-white"> <span className="text-[12px]">feels like: </span>{feels}</div>
                        </div>
                        <div>
                            <div className="text-white font-bold absolute top-[70px] left-3">{temp}°C</div>
                            {min && max ?
                             <div>
                                <div className="absolute top-[90px] left-3 flex gap-4">
                                    <div className="text-white"> <span className="font-bold text-[10px]">min: </span>{min}</div>
                                    <div className="text-white"> <span className="font-bold text-[10px]">max: </span>{max}</div>

                                </div>

                            </div> : <div>{null}</div>}
                        </div>


                    </div>

                </div>

            </div>



        </>
    ) : <div>Loading...</div>
}
export default Weatherdashboard