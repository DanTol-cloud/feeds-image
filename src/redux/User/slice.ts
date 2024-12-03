import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";
import { fetchUserById } from "./thunk";

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers,
    extraReducers: builder => {
        builder.addCase(fetchUserById.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer;