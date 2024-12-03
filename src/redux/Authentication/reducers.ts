import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthDataType, InitialStateI } from "../types";

export const reducers = {
    logOut(state: InitialStateI<AuthDataType>) {
        AsyncStorage.removeItem("userData")
        return {
            ...state,
            data: {}
        }
    }
};