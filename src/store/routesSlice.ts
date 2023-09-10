import {ROUTES} from 'common/Consts';
import {IRoute} from 'common/Models';
import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';

/**
 * Интерфейс состояния ветки маршрутов.
 *
 * @param routes Массив данных о заданных маршрутах.
 * @param polyline Массив координат для построения полилинии.
 * @param markers Массив координат маркеров для построения маршрутов.
 * @param isLoading Статус загрузки.
 * @param isError Статус ошибки.
 * @param errorMessage Сообщение об ошибке.
 */
export interface IRoutesState {
    routes: IRoute[];
    polyline: [number, number][];
    markers: string[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

const initialState: IRoutesState = {
    routes: ROUTES,
    polyline: [],
    markers: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setPolyline(state, action: PayloadAction<[number, number][]>) {
            state.isError = false;
            state.polyline = action.payload;
        },
        setMarkers(state, action: PayloadAction<string[]>) {
            state.markers = action.payload;
        },
        setIsLoading(state) {
            state.isLoading = !state.isLoading;
        },
        setError(state, action: PayloadAction<string>) {
            state.isError = true;
            state.errorMessage = action.payload;
        },
    },
});

export const GET_POLYLINES = 'routes/getPolyline';
export const getPolylines = createAction<string>(GET_POLYLINES);

export const {setPolyline, setMarkers, setIsLoading, setError} = routesSlice.actions;

export default routesSlice.reducer;
