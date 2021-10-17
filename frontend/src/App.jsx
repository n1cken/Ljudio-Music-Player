
import './styles/App.css';


import Player from './components/Player';
import TopBar from './components/TopBar';
import { Route, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PlayingPage from "./pages/PlayingPage";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import React, { useState } from "react";
import PlayerInformation from "./components/PlayerInformation";
import PlayerApi from "./components/PlayerApi";

function App() {
    const [playlistIndex, setPlaylistIndex] = useState(0)
    return (
        <Router>
            <TopBar />

            <main>
                <Route path="/searchpage/:search" exact component={SearchPage} />
                <Route path="/playingpage" >
                    <PlayingPage playlistIndex={playlistIndex} />
                </Route>
                <Route path="/artistpage/:artistId" exact component={ArtistPage} />
                <Route path="/artistpage" exact component={ArtistPage} />
                <Route path="/" exact component={HomePage} />

            </main>
            <PlayerApi playlistIndex={playlistIndex} setPlaylistIndex={setPlaylistIndex} />
        </Router>
    );
}

export default App;
