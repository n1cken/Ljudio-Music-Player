
import './styles/App.css';


import Player from './components/Player';
import TopBar from './components/TopBar';
import { Route, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PlayingPage from "./pages/PlayingPage";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import React from "react";
import PlayerInformation from "./components/PlayerInformation";

function App() {
    return (
        <Router>
            <TopBar />

            <main>
                <Route path="/searchpage/:search" exact component={SearchPage} />
                <Route path="/playingpage" exact component={PlayingPage} />
                <Route path="/artistpage/:artistId" exact component={ArtistPage} />
                <Route path="/artistpage" exact component={ArtistPage} />
                <Route path="/" exact component={HomePage} />
                <Route path="/playingPage/:videoId" component={PlayingPage} />
            </main>

        </Router>
    );
}

export default App;
