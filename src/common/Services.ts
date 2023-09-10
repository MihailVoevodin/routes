import axios, {AxiosResponse} from 'axios';

export const RoutesService = {
    /** Получение полилинии. */
    getPolyline(coordinates: string): Promise<AxiosResponse> {
        return axios.get(`https://router.project-osrm.org/route/v1/driving/${coordinates}?geometries=geojson&overview=full`);
    },
};
