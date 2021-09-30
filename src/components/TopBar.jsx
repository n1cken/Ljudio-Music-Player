import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import StartPage from '../pages/StartPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
import Home from "../assets/svgFiles/home.svg";
import Search from "../assets/svgFiles/search.svg";

import '../styles/TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchActivated : false
        };

    }

    render() {
        return (
            <div>
                <Router>

                <nav className="top">
                    <Link to="/">
                       <img src={Home} alt="backwards" className="homeButton"/>
                    </Link>

                    <Link onClick={Home}>
                        <img src={Search} alt="search" className="searchButton"/>
                    </Link>

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



