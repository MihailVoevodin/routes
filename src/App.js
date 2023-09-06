import './App.css';
import {MapContainer, TileLayer} from "react-leaflet";
import React from "react";

function App() {
  return (
    <div className="App">
      Hello world!
        <div id='map'>
            <MapContainer center={[55.75, 37.61]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>

    </div>
  );
}

export default App;
