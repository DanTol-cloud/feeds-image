export type InitialStateI<T> = {
    data: T;
    isLoading: boolean;
    error?: string;
}

export type AuthDataType = {
    id?: number;
    token?: string;
} | string | null;

export type FeedsDataType = {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string;
}

export type UserDataType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}