import {createSlice} from "@reduxjs/toolkit";
import {IRoute} from 'common/Models';


export interface IRoutesState {
    routes: IRoute[];
}

const initialState = {
    routes: [
        {
            key: 1,
            name: "Маршрут 1",
            points: [
                {
                    key: 1,
                    name: "Точка 1",
                    text: "59.84660399,30.29496392"
                },
                {
                    key: 2,
                    name: "Точка 2",
                    text: "59.82934196,30.42423701"
                },
                {
                    key: 3,
                    name: "Точка 3",
                    text: "59.83567701,30.38064206"
                }
            ],
        },
        {
            key: 2,
            name: "Маршрут 2",
            points: [
                {
                    key: 1,
                    name: "Точка 1",
                    text: "59.82934196,30.42423701"
                },
                {
                    key: 2,
                    name: "Точка 2",
                    text: "59.82761295,30.41705607"
                },
                {
                    key: 3,
                    name: "Точка 3",
                    text: "59.84660399,30.29496392"
                }
            ],
        },
        {
            key: 3,
            name: "Маршрут 3",
            points: [
                {
                    key: 1,
                    name: "Точка 1",
                    text: "59.83567701,30.38064206"
                },
                {
                    key: 2,
                    name: "Точка 2",
                    text: "59.84660399,30.29496392"
                },
                {
                    key: 3,
                    name: "Точка 3",
                    text: "59.82761295,30.41705607"
                }
            ],
        },
    ]
}

const routesSlice = createSlice({
    name: 'routes',
    initialState: initialState,
    reducers: {
        setRoute(state, action) {
            state.routes.push(action.payload)
        }
    }
})

export const {setRoute} = routesSlice.actions;

export default routesSlice.reducer;
