import { configureStore } from "@reduxjs/toolkit";
import IncDecSlice from "../slices/IncDecSlice";
export const store=configureStore({
    reducer:{
        addToCart:IncDecSlice,
    }
})