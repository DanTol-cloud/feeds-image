import { InitialStateI, UserDataType } from "../types";


export const initialState: InitialStateI<UserDataType> = {
    data: {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
    },
    isLoading: false,
    error: ""
}