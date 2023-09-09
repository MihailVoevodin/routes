import axios, {AxiosResponse} from 'axios';
import {IRouteResponse} from 'common/Models';

export const RoutesService = {
    /** Получение текущей погоды после поиска. */
    getPolyline(coordinates: string): Promise<AxiosResponse<IRouteResponse>> {
        return axios.get(`https://router.project-osrm.org/route/v1/driving/${coordinates}?geometries=geojson&overview=full`);
    },
};
