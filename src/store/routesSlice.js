import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    routes: {
        route1: [55.75, 37.61]
    }
}

const routesSlice = createSlice({
    name: 'routes',
    initialState: initialState,
    reducers: {
        setRoute(state, action) {
            state.push(action.payload)
        }
    }
})

export const {setRoute} = routesSlice.actions;

export default routesSlice.reducer;
