
import './styles/App.css';
import Player from './components/Player';
import TopBar from './components/TopBar';
import {Route, BrowserRouter as Router} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PlayingPage from "./pages/PlayingPage";
import HomePage from "./pages/HomePage";
import React from "react";

function App() {
  return (
      <Router>
        <TopBar />

        <main>
            <Route path="/searchpage/:search" exact component={SearchPage} />
            <Route path="/playingpage" exact component={PlayingPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/playingPage/:videoId" component={PlayingPage} />
        </main>

        <Player />
      </Router>
  );
}

export default App;
