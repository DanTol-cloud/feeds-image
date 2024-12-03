import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from './Authentication/slice';
import feedsReducer from './Feeds/slice';
import userReducer from './User/slice';

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        feeds: feedsReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;