import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchAuthentication = createAsyncThunk('authentication/fetchAuthentication', async (data: { email: string, password: string }, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://reqres.in/api/login', data);
        await AsyncStorage.setItem('userData', JSON.stringify(data))
        return response.data;
    } catch (e) {
        const err = e as AxiosError
        rejectWithValue(err.message)
        return err.message;
    }
});