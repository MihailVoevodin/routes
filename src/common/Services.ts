import axios, {AxiosResponse} from 'axios';

export const RoutesService = {
    /** Получение текущей погоды после поиска. */
    getPolyline(): Promise<AxiosResponse> {
        return axios.get(`http://router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219?overview=false`);
    },
};