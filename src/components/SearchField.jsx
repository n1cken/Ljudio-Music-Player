import React, {Component} from 'react';

import '../styles/TopBar.css'

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
                    <button type="submit">Search</button>
                </form>

            </div>
        );
    }
}

export default SearchField;