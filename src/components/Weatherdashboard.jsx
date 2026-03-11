import React from "react"
import { useSelector } from "react-redux"
import SunnyIcon from '@mui/icons-material/Sunny';

function Weatherdashboard() {
    const temp = useSelector(state => state.weather.currentTemp)

    return temp ? (
        <>
            <div>
                <div className="hover-3d">
                    {/* content */}
                    <figure className="w-60 rounded-2xl">
                        <img src="https://as1.ftcdn.net/v2/jpg/01/80/41/10/1000_F_180411044_aP8YqKLbHnaH5cWLTGLhuxWO0zkV8mrY.jpg" alt="Tailwind CSS 3D hover" />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>

            <SunnyIcon fontSize="large" className="text-yellow-300"/>

        </>
    ) : <div>Loading...</div>
}
export default Weatherdashboard