import {configureStore} from '@reduxjs/toolkit';
import routesSlice from "./routesSlice";

export const store = configureStore({
    reducer: {
        routes: routesSlice,
    },
});