import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    currentTemp: null,
    min: 0,
    max: 0,
    visibility: 0,
    wind: null
  
}

const weatherDataSlice = createSlice({

    name: "weather",
    initialState,
    reducers: {

        setData: (state, action)=>{

         state.data = action.payload
        

        },

        setTemp: (state, action)=>{
            state.currentTemp = action.payload
        },

        setVisibility: (state, action)=>{
            state.visibility = action.payload
        },

        setWind: (state, action)=> {
            state.wind = action.payload
        },

        setMin: (state, action)=> {
            state.min = action.payload
        }, 

        setMax: (state, action)=> {
            state.max = action.payload
        }

       
    } 


})

export const { setData, setTemp, setVisibility, setWind, setMin, setMax } = weatherDataSlice.actions
export default weatherDataSlice.reducer