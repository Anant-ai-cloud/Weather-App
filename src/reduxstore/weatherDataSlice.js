import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    currentTemp: null,
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
        }

       
    } 


})

export const { setData, setTemp, setVisibility, setWind } = weatherDataSlice.actions
export default weatherDataSlice.reducer