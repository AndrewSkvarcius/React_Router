import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

const FilterDogs = ({dogs}) => {
    const {name} = useParams();
    if(name) {
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLocaleLowerCase()
        );
        return <DogDetails dog={currentDog} />;
            }
        return null;
        

   
}
export default FilterDogs;
