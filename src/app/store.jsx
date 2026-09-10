import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"; //doubt

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})