import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    temp: null,
    lat:0,
    lon:0
}

const weatherDataSlice = createSlice({

    name: "weather",
    initialState,
    reducers: {

        setTemp: (state, action)=>{

         state.temp = action.payload

        },

        setLat: (state, action)=>{

            state.lat = action.payload

        },
        setLon: (state, action)=>{

            state.lon = action.payload
            
        }
    } 


})

export const { setTemp, setLat, setLon } = weatherDataSlice.actions
export default weatherDataSlice.reducer