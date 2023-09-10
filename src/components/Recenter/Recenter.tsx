import {useEffect, FC} from 'react';
import {useMap} from 'react-leaflet';

/**
 * @param markers - Массив маркеров.
 */
interface IProps {
    markers: string[];
    polyline: [number, number][];
}

/**
 * Компонент центровки карты.
 */
export const Recenter: FC<IProps> = ({markers, polyline}) => {
    const map = useMap();
    const coordinates = [...markers, ...polyline];

    useEffect(() => {
        // @ts-ignore
        map.fitBounds(coordinates);
    }, [markers]);
    return null;
};
