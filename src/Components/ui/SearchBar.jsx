import React from 'react';

const SearchBar = ({query}) => {
    
    return (
        <div className='searchbar'>
            <input className='search-input' type="text" placeholder='Search by name...' onChange={(e) => query(e.target.value)}/>
            <div className="search-icon">
                <i className="bi bi-search"></i>
            </div>
        </div>
    );
}

export default SearchBar;
