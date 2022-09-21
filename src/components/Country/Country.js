import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, population,name,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Region: {region}</h4>
            <h4>Area: {area}</h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;