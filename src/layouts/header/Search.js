import React from 'react';
import Icon from "../../components/Icon/Icon";

const Search = () => {
    return (
        <form action="#" className="search">
            <button className="search__button">
                <Icon icon="#search" class="search__icon"/>
            </button>
            <input type="search" className="search__input" placeholder="search"/>
        </form>
    );
}

export default Search;
