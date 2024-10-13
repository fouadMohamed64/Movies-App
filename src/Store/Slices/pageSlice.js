import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'current page',
    initialState: {page: 1},
    reducers: {
        nextPage: function (state, action){
            if(state.page < 20){
                state.page += 1
            }
        } ,
        prevPage: function (state, action){
            if(state.page > 1){
                state.page -= 1
            }
        } ,
        setPage:  function (state, action){
            if(action.payload >= 1 && action.payload <= 20){
                state.page = action.payload
            }
        }
    }
})

export const {nextPage, prevPage, setPage} = pageSlice.actions;

export default pageSlice.reducer;