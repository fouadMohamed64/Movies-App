import {createSlice} from "@reduxjs/toolkit";

const LoadersSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoad: true
    },
    reducers: {
        changeLoader: function (state, action){
            state.isLoad = action.payload;
        },
        reverceLoader: function (state, action){
            state.isLoad = !state.isLoad;
        }
    }
})

export const {changeLoader, reverceLoader} = LoadersSlice.actions

export default LoadersSlice.reducer;