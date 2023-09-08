import './App.css';
import {MAP_CENTER_DEFAULT, ZOOM_DEFAULT} from 'common/Consts';
import {TableComponent} from 'components/Table/Table';
import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Маршруты</h1>
            <main className="AppContainer">
                <TableComponent />
                <div id="map">
                    <MapContainer center={MAP_CENTER_DEFAULT} zoom={ZOOM_DEFAULT}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </div>
            </main>
        </div>
    );
};

export default App;
