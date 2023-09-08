import {RoutesService} from 'common/Services';
import {put, call} from 'redux-saga/effects';
import {setPolyline} from 'store/routesSlice';

/**
 *
 */
export function* fetchPolylines(): any {
    const response: any = yield call(RoutesService.getPolyline);
    yield console.log(response.data.routes[0].geometry);
    yield put(setPolyline(response));
}
