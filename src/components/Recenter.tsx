import {useEffect, FC} from 'react';
import {useMap} from 'react-leaflet';

interface IProps {
    lat: number;
    lng: number;
    coords: string[];
}

export const Recenter: FC<IProps> = ({lat, lng, coords}) => {
    const map = useMap();

    useEffect(() => {
        // @ts-ignore
        map.fitBounds(coords);
        // map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
};
