import { InitialStateI, AuthDataType } from "../types";

export const initialState: InitialStateI<AuthDataType> = {
    data: null,
    isLoading: false,
    error: '',
}