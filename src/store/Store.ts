import {configureStore} from '@reduxjs/toolkit';
import routesSlice, {IRoutesState} from "store/routesSlice";

export interface IAppState {
    routes: IRoutesState;
}

export const store = configureStore<IAppState>({
    reducer: {
        routes: routesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
