import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    currentTemp: null,
    description: "",
    min: 0,
    max: 0,
    visibility: 0,
    wind: null,
    fiveDays: null
  
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
        },

        setDescription: (state, action)=>{
            state.description=  action.payload
        },

        setFiveDays: (state, action)=> {
            state.fiveDays = action.payload
        }

       
    } 


})

export const { setData, setTemp, setVisibility, setWind, setMin, setMax, setDescription, setFiveDays } = weatherDataSlice.actions
export default weatherDataSlice.reducer