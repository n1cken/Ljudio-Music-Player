import React, {Component} from 'react';

import '../styles/TopBar.css'
import Search from "../assets/svgFiles/search.svg";

class SearchField extends Component {
    render() {
        return (
            <div className={"searchField"}>

                <form action="" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="I want to listen to ..."
                        name="s"
                    />
                    <button type="submit" class="buttonSearch"> <img src={Search} alt="search" className="searchIcon" />
                    </button>
                </form>

            </div>
        );
    }
}

export default SearchField;