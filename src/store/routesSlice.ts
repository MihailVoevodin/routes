import {ROUTES} from 'common/Consts';
import {IRoute} from 'common/Models';
import {createAction, createSlice} from '@reduxjs/toolkit';

export interface IRoutesState {
    routes: IRoute[];
    polyline: [number, number][];
    markers: string[];
}

const initialState: IRoutesState = {
    routes: ROUTES,
    polyline: [],
    markers: [],
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setPolyline(state, action) {
            state.polyline = [];
            state.polyline = action.payload;
        },
        setMarkers(state, action) {
            state.markers = action.payload;
        },
    },
});

export const GET_POLYLINES = 'routes/getPolyline';
export const getPolylines = createAction<string>(GET_POLYLINES);

export const {setPolyline, setMarkers} = routesSlice.actions;

export default routesSlice.reducer;
