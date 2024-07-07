import React, { useEffect, useState } from 'react';
import Header from '../Header';
import PropertyListing from '../PropertyListing';
import SortAndFilter from '../SortAndFilter';
import './App.scss';

const api = 'http://localhost:3000/api';

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        if (isLoading) return;

        setIsLoading(true);

        const fetchProperties = async () => {
            const response = await fetch(`${api}/properties`);
            const parsedResponse = await response.json();

            setProperties(parsedResponse);
            setIsLoading(false);
        };

        fetchProperties();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                {properties ? <PropertyListing properties={properties} /> : 'loading...'}
            </main>
        </div>
    );
};

export default App;
