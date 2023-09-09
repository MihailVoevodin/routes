import {MAP_CENTER_DEFAULT, ZOOM_DEFAULT} from 'common/Consts';
import {coordinatesOfCenter} from 'common/Helpers';
import {useAppSelector} from 'common/Hooks';
import {Recenter} from 'components/Recenter';
import React, {FC} from 'react';
import './Map.scss';
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';

export const MapComponent: FC = () => {
    const {markers, polyline} = useAppSelector((state) => state.routes);

    return (
        <div id="map">
            <MapContainer center={MAP_CENTER_DEFAULT} zoom={ZOOM_DEFAULT}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.length > 0 &&
                    markers.map((marker: string, id: number) => (
                        <Marker key={id} position={[+marker[0], +marker[1]]}>
                            <Popup>{`${id}. ${marker[0]}, ${marker[1]}`}</Popup>
                        </Marker>
                    ))}
                {polyline.length > 0 && (
                    <>
                        <Recenter lat={coordinatesOfCenter(polyline)[0]} lng={coordinatesOfCenter(polyline)[1]} coords={markers} />
                        <Polyline pathOptions={{color: '#0078a8', weight: 5}} positions={polyline} />
                    </>
                )}
            </MapContainer>
        </div>
    );
};
