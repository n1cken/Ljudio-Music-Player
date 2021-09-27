
import './App.css';
import Backward from './svgFiles/backward-solid.svg';
import play from './svgFiles/play-solid.svg';
import forward from './svgFiles/forward-solid.svg';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <nav class="top">
        <Link to="/"> Start </Link>
        <Link to="/AboutPage"> About </Link>
        <Link to="/ContactPage"> Contact </Link>
        <Link to="/ProductPage"> Products </Link>
      </nav>

      <main>
        <Route path="/" exact component={StartPage} />
        <Route path="/AboutPage" exact component={AboutPage} />
        <Route path="/ContactPage" exact component={ContactPage} />
        <Route path="/ProductPage" exact component={ProductPage} />
        <Route path="/ProductPage/:videoId" component={ProductPage} />
      </main>

      <div class="bottom">
        <div></div>
        <img src={Backward} alt="backwards" />
        <img src={play} alt="play" />
        <img src={forward} alt="forward" />
        <div></div>
      </div>
    </Router>
  );
}

export default App;
