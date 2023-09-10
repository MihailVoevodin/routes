import {ErrorComponent} from 'components/Error/Error';
import {MapComponent} from 'components/Map/Map';
import {Spinner} from 'components/Spinner/Spinner';
import {TableComponent} from 'components/Table/Table';
import React, {FC} from 'react';
import './App.css';

const App: FC = () => {
    return (
        <div className="App">
            <header>
                <h1>Маршруты</h1>
            </header>
            <Spinner />
            <main className="AppContainer">
                <div>
                    <TableComponent />
                    <ErrorComponent />
                </div>
                <MapComponent />
            </main>
        </div>
    );
};

export default App;
