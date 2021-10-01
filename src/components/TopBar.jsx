import React from 'react';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PlayingPage from '../pages/PlayingPage';
import SearchPage from '../pages/SearchPage';
import SearchField from "./SearchField";

import Home from "../assets/svgFiles/home.svg";
import Search from "../assets/svgFiles/search.svg";
import Close from "../assets/svgFiles/window-close-regular.svg"

import '../styles/TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchActivated: false
        }

        /* Binds this function to the instance of this class.
        Otherwise, activateSearch will try to setState the Button */
        this.activateSearch = this.activateSearch.bind(this);
    }

    activateSearch() {
        this.setState({ searchActivated: true })

        if (this.state.searchActivated === true) {
            this.setState({ searchActivated: false })
        }
    }

    render() {
        return (
            <div>
                <Router>

                    <nav className="top">
                        <Navbar>
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                            <Link to="/searchpage">
                                <p>Search</p>
                            </Link>
                            <Link to="/playingpage">
                                <p>playing</p>
                            </Link>
                        </Navbar>

                        {!this.state.searchActivated ? <Link to="/">
                            <img src={Home} alt="backwards" className="homeButton" />
                        </Link> : null}

                        {this.state.searchActivated ? <SearchField /> : null}

                        {this.state.searchActivated ?
                            <div className="searchDiv" onClick={this.activateSearch}>
                                <img src={Close} alt="search" className="searchIcon" />
                            </div>
                            : <div className="searchDiv" onClick={this.activateSearch}>
                                <img src={Search} alt="search" className="searchIcon" />
                            </div>}


                    </nav>

                    <main>
                        <Route path="/searchpage" exact component={SearchPage} />
                        <Route path="/playingpage" exact component={PlayingPage} />
                        <Route path="/" exact component={HomePage} />
                        <Route path="/playingPage/:videoId" component={PlayingPage} />
                    </main>

                </Router>
            </div>
        );
    }
}

export default TopBar



