import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoOptions, GEO_API_URL } from '../services/api';


const Search = ({ onSearchData }) => {

    const [search, setSearch] = useState(null);


    const handlChange = (searchData) => {
        setSearch(searchData);
        onSearchData(searchData);
    }

    const loadOptions = (inputValue) => {

        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoOptions)
            .then(response => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));

    }


    return (
        <div className="row my-3">
            {/* <div className="col-md-2">
                <IoMdWater fontSize="25px" color='#3498db'/>
            </div> */}
            <div className='col-md-8 mx-auto'>
                <AsyncPaginate
                    placeholder='search for city'
                    debounceTimeout={600}
                    value={search}
                    onChange={handlChange}
                    loadOptions={loadOptions}
                    style={{backgroundColor:"red !important"}}
                />
            </div>
        </div>
    )
}

export default Search