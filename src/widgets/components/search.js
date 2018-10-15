import React from 'react';
import './search.css';

const Search = (props) => (
    <form
        className="Search" 
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text"
            placeholder="busca nomas"
            className="Search-input"
            name="search"
        />
    </form>
)

export default Search;