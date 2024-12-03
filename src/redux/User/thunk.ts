import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";


export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id: string, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`)
        return response.data.data;
    } catch (e) {
        const err = e as AxiosError
        rejectWithValue(err.message)
    }
})