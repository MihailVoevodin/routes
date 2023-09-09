import './App.css';
import {MapComponent} from 'components/Map/Map';
import {TableComponent} from 'components/Table/Table';
import React from 'react';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Маршруты</h1>
            <main className="AppContainer">
                <TableComponent />
                <MapComponent />
            </main>
        </div>
    );
};

export default App;
