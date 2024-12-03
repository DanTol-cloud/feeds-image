import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";
import { fetchAuthentication } from "./thunk";

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers,
    extraReducers: builder => {
        builder.addCase(fetchAuthentication.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchAuthentication.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchAuthentication.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const { logOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;