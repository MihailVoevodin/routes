import {MAP_CENTER_DEFAULT, ZOOM_DEFAULT} from 'common/Consts';
import React, {FC} from 'react';
import './Map.scss';
import {MapContainer, TileLayer} from 'react-leaflet';

export const MapComponent: FC = () => {
    return (
        <div id="map">
            <MapContainer center={MAP_CENTER_DEFAULT} zoom={ZOOM_DEFAULT}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};
