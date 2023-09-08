import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';
import {fetchPolylines} from 'saga/polylinesSaga';
import routesSlice, {GET_POLYLINES} from 'store/routesSlice';
import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

/**
 *
 */
function* sagas() {
    yield takeEvery(GET_POLYLINES, fetchPolylines);
}

export const store = configureStore({
    devTools: true,
    reducer: {
        routes: routesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
