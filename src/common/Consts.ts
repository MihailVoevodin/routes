import {IRoute} from 'common/Models';
import {LatLngExpression} from 'leaflet';

/** Дефолтные координаты центра карты. */
export const MAP_CENTER_DEFAULT: LatLngExpression | undefined = [59.85, 30.3];

/** Дефолтный зум карты. */
export const ZOOM_DEFAULT: number = 15;

/** Массив заданных маршрутов. */
export const ROUTES: IRoute[] = [
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
];
