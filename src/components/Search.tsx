import React, { FC, useState } from 'react';
import logo from '../assets/search.png'
import dataStore from '../store/dataStore';

interface SearchProps {
    setValue: (string :string) => void
    search: () => void
}

const Search:FC<SearchProps> = ({search, setValue}) => {
    return (
        <div className='searchBar'>
            <input 
                placeholder='Поиск' 
                className='searchBarInput' 
                onChange={ e => setValue(e.target.value)} 
                onKeyUp={ e => { 
                    if (e.key === 'Enter') {
                        search()
                    }
                }}/>
            <img src={logo} className='searchLogo' onClick={search}/>
        </div>
    );
};

export default Search;