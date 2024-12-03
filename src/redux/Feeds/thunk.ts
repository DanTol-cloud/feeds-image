import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";


export const fetchFeeds = createAsyncThunk('feeds/fetchFeeds', async (page: number, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
        return response.data
    } catch (e) {
        const err = e as AxiosError
        rejectWithValue(err.message);
        return err.message;
    }
})