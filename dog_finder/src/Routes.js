import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import FilterDogs from './FilterDogs';

function Routing({ dogs }) {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<FilterDogs dogs={dogs} />} />
            <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
    );
}

export default Routing;