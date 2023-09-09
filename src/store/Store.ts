import createSagaMiddleware from 'redux-saga';
import {polylineWatcher} from 'saga/polylinesSaga';
import routesSlice from 'store/routesSlice';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    devTools: true,
    reducer: {
        routes: routesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(polylineWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
