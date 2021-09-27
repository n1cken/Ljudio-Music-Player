
import './App.css';

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
      <nav>
      <Link to="/"> Start </Link>
      <Link to="/AboutPage"> About </Link>
      <Link to="/ContactPage"> Contact </Link>
      <Link to="/ProductPage"> Products </Link>
      </nav>

      <main>
     <Route path="/" exact component={StartPage}/>
     <Route path="/AboutPage" exact component={AboutPage}/>
     <Route path="/ContactPage" exact component={ContactPage}/>
     <Route path="/ProductPage" exact component={ProductPage}/>
     <Route path="/ProductPage/:videoId" component={ProductPage}/>
     </main>
    </Router>
  );
}

export default App;
