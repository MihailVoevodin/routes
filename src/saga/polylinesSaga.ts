import {RoutesService} from 'common/Services';
import {put, call, takeEvery} from 'redux-saga/effects';
import {GET_POLYLINES, setPolyline} from 'store/routesSlice';
import {PayloadAction} from '@reduxjs/toolkit';

/**
 * Воркер для получения и записи в стор полилинии.
 */
function* fetchPolylineWorker(action: PayloadAction<string>): Generator {
    const response: any = yield call(RoutesService.getPolyline, action.payload);

    yield put(setPolyline(response.data.routes[0].geometry.coordinates.map(([lng, lat]: [number, number]) => [lat, lng])));
}

/**
 * Вотчер полилинии.
 */
export function* polylineWatcher(): Generator {
    yield takeEvery(GET_POLYLINES, fetchPolylineWorker);
}
