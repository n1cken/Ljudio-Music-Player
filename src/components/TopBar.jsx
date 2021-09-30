import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import StartPage from '../pages/StartPage';
import ProductPage from '../pages/ProductPage';
import SearchField from "./SearchField";

import Home from "../assets/svgFiles/home.svg";
import Search from "../assets/svgFiles/search.svg";

import '../styles/TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchActivated : false
        }

        /* Binds this function to the instance of this class.
        Otherwise, activateSearch will try to setState the Button */
        this.activateSearch = this.activateSearch.bind(this);
    }

  activateSearch () {
        this.setState( { searchActivated : true })

        if (this.state.searchActivated === true) {
            this.setState( { searchActivated : false })
        }
    }

    render() {
        return (
            <div>
                <Router>

                <nav className="top">
                    <Link to="/">
                       <img src={Home} alt="backwards" className="homeButton"/>
                    </Link>

                    {this.state.searchActivated ? <SearchField/> : null }

                    <button onClick={this.activateSearch}>
                        <img src={Search} alt="search" className="searchButton"/>
                    </button>

                </nav>

                <main>
                    <Route path="/" exact component={StartPage} />
                    <Route path="/ProductPage/:videoId" component={ProductPage} />
                </main>

                </Router>
            </div>
        );
    }
}

export default TopBar



