import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./Slices/loaderSlice";
import pageSlice from "./Slices/pageSlice";

export const Store = configureStore({
    reducer: {
        loader: loaderSlice,
        page: pageSlice
    }
})