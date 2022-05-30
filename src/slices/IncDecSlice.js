import { createSlice } from "@reduxjs/toolkit";
 const initialValues={
     count:0,
 };
 const IncDecSlice=createSlice({
     name:'addToCart',
     initialState:initialValues,
     reducers:{
         increaseValue:(state)=>{
            state.count+=1;
            console.log('StateCount',state.count);
         },
         decreaseValue:(state,action)=>{
            state.count-=action.payload;
         }
     }
 })
 export const {increaseValue,decreaseValue}=IncDecSlice.actions;
 export default IncDecSlice.reducer;