import {IPoint} from 'common/Models';

/**
 * Функция объединения координат для осуществления запроса на сервер.
 * @param points - Массив заданных точек.
 */
export const concatCoordinates = (points: IPoint[]): any => {
    return points
        .map((point) => point.text.split(';'))
        .map((p) => p[0].split(',').reverse().join(','))
        .join(';');
};

/**
 * Функция создания массива координат для отображения маркеров.
 * @param points - Массив заданных точек.
 */
export const markersArray = (points: IPoint[]): any => {
    return points.map((point) => point.text.split(','));
};
