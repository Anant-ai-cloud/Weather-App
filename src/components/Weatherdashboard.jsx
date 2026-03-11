import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "../index.css"
function Weatherdashboard() {
    const obj = useSelector(state => state.weather.currentTemp)
    const list = useSelector(state=> state.weather.data)
    const temp = Math.round(obj?.temp)
    const feels = Math.round(obj?.feels_like)

    const minmaxTemp = ()=>{

        const formatted = new Date().toISOString().split('T')[0]
        const temps = list?.map((item)=>{
            console.log(item)
            console.log(item.dt_txt)
        if(item.dt_txt.includes(formatted)){
            console.log(item.dt_txt)

        }
        }
        )

    }
    useEffect(()=>{

    minmaxTemp()


    },[])

    return obj ? (
        <>
            <div>
            <div className="w-[390px] h-[190px] ml-[600px] relative mt-3 border">
                <div>
                    <div className="absolute top-[50px] right-1">
                    <WbSunnyIcon className="text-yellow-300" fontSize="large"/>
                    <div className="text-white"> <span className="text-[12px]">feels like: </span>{feels}</div>
                    </div>
                    <div>
                    <div className="text-white font-bold absolute top-[70px] left-3">{temp}°C</div>
                    </div>
                 
                 
                 </div>

            </div>

            </div>

            
           
        </>
    ) : <div>Loading...</div>
}
export default Weatherdashboard