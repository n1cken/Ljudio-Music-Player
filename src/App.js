
import './styles/App.css';
import Player from './components/Player';
import Backward from './assets/svgFiles/backward-solid.svg';
import play from './assets/svgFiles/play-solid.svg';
import forward from './assets/svgFiles/forward-solid.svg';


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



        <Player/>
    </Router>

  );
}

export default App;
