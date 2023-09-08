import {IRoute} from 'common/Models';
import {createAction, createSlice} from '@reduxjs/toolkit';

export interface IRoutesState {
    routes: IRoute[];
    polyline: any;
}

const initialState: IRoutesState = {
    routes: [
        {
            key: 1,
            name: 'Маршрут 1',
            points: [
                {
                    key: 1,
                    name: 'Точка 1',
                    text: '59.84660399,30.29496392',
                },
                {
                    key: 2,
                    name: 'Точка 2',
                    text: '59.82934196,30.42423701',
                },
                {
                    key: 3,
                    name: 'Точка 3',
                    text: '59.83567701,30.38064206',
                },
            ],
        },
        {
            key: 2,
            name: 'Маршрут 2',
            points: [
                {
                    key: 1,
                    name: 'Точка 1',
                    text: '59.82934196,30.42423701',
                },
                {
                    key: 2,
                    name: 'Точка 2',
                    text: '59.82761295,30.41705607',
                },
                {
                    key: 3,
                    name: 'Точка 3',
                    text: '59.84660399,30.29496392',
                },
            ],
        },
        {
            key: 3,
            name: 'Маршрут 3',
            points: [
                {
                    key: 1,
                    name: 'Точка 1',
                    text: '59.83567701,30.38064206',
                },
                {
                    key: 2,
                    name: 'Точка 2',
                    text: '59.84660399,30.29496392',
                },
                {
                    key: 3,
                    name: 'Точка 3',
                    text: '59.82761295,30.41705607',
                },
            ],
        },
    ],
    polyline: [],
};

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setPolyline(state, action) {
            state.polyline = action.payload;
        },
    },
});

export const GET_POLYLINES = 'routes/getPolylines';
export const getPolylines = createAction(GET_POLYLINES);

export const {setPolyline} = routesSlice.actions;

export default routesSlice.reducer;
