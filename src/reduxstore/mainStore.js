import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherDataSlice.js"

const store= configureStore({
  reducer: {
   weather: weatherReducer
 
}

    
})

export default store