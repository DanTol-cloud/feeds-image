import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from './reducers';
import { fetchFeeds } from "./thunk";

export const PAGE_SIZE = 10;

const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers,
    extraReducers: builder => {
        builder.addCase(fetchFeeds.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchFeeds.fulfilled, (state, action) => {
            state.isLoading = false;
            state.page += action.payload.length === PAGE_SIZE ? 1 : 0;
            state.data = state.data.concat(action.payload);

        })
        builder.addCase(fetchFeeds.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default feedsSlice.reducer;