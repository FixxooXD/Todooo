import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


const store = configureStore({
    reducer: {
        user: todoSlice
    }
})

export default store;