import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom'

import '../styles/TopBar.css'
import Search from "../assets/svgFiles/search.svg";


const SearchField = () => {

    const history = useHistory()
    const [search, setSearch] = useState('')

    function updateText(e) {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    async function submitButton(e) {
        e.preventDefault();
        history.push('/searchpage/' + search)
    }


    return (
        <div className={"searchField"}>

            <form onSubmit={submitButton}>
                <input
                    type="text"
                    id="header-search"
                    placeholder="I want to listen to ..."
                    name="s"
                    onChange={updateText}
                    value={search}
                />
                <button type="submit" class="buttonSearch"> <img src={Search} alt="search" className="searchIcon" />
                </button>
            </form>

        </div>
    );
}

export default SearchField