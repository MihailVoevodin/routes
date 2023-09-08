import axios, {AxiosResponse} from 'axios';

export const RoutesService = {
    /** Получение текущей погоды после поиска. */
    getPolyline(): Promise<AxiosResponse> {
        return axios.get(
            `http://router.project-osrm.org/route/v1/driving/59.84660399,30.29496392;59.82934196,30.42423701;59.83567701,30.38064206?geometries=geojson&overview=full`
        );
    },
};
