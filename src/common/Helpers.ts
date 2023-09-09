import {IPoint} from 'common/Models';

export const concatCoordinates = (points: IPoint[]): any => {
    return points
        .map((point) => point.text.split(';'))
        .map((p) => p[0].split(',').reverse().join(','))
        .join(';');
};

export const markersArray = (points: IPoint[]): any => {
    return points.map((point) => point.text.split(','));
};

export const coordinatesOfCenter = (coordinates: [number, number][]) => {
    const allLats = coordinates.map((coordinate) => coordinate[0]);
    const allLngs = coordinates.map((coordinate) => coordinate[1]);

    const avgLat = (Math.min(...allLats) + Math.max(...allLats)) / 2;
    const avgLng = (Math.min(...allLngs) + Math.max(...allLngs)) / 2;

    return [avgLat, avgLng];
};
