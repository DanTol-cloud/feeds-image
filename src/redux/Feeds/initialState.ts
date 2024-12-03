import { InitialStateI, FeedsDataType } from "../types";

export const initialState: InitialStateI<FeedsDataType[]> & { hasMore: boolean, page: number } = {
    data: [],
    page: 1,
    hasMore: true,
    isLoading: false,
    error: '',
}