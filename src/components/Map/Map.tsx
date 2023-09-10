import {MAP_CENTER_DEFAULT, ZOOM_DEFAULT} from 'common/Consts';
import {useAppSelector} from 'common/Hooks';
import {Recenter} from 'components/Recenter/Recenter';
import React, {FC} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';

/**
 * Компонент отображения карты.
 */
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
                            <Popup>{`${id + 1}. ${marker[0]}, ${marker[1]}`}</Popup>
                        </Marker>
                    ))}
                {polyline.length > 0 && (
                    <>
                        <Recenter markers={markers} polyline={polyline} />
                        <Polyline pathOptions={{color: '#0000ff', weight: 3}} positions={polyline} />
                    </>
                )}
            </MapContainer>
        </div>
    );
};
