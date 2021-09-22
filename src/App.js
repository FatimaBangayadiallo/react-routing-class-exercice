
import './App.css';
import Nav from './components/Navigation.jsx';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import HomePage from './components/Home.jsx';
import AboutPage from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import Details from './components/ServicesDetail.jsx';

function App() {
  return (
  <div className="App">
    <Router>
    <Nav  />
     <Route path="/" exact={true} component={HomePage} />
     <Route path="/about" exact={true} component={AboutPage} />
     <Route path="/contact" exact={true} component={Contact} />
     <Route path="/services" exact={true} component={Services} />
     <Route path="/servicesDetail/:id" exact={true} component={Details} />
    </Router>
   </div>
  );
}

export default App;
