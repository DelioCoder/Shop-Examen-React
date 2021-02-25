import { BrowserRouter as Router, Route } from 'react-router-dom';


// Components
import HomeScreen from './Components/HomeScreen';
import Footer from './Components/Footer';
import ProductScreen from './Components/ProductScreen';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';

function App() {
  return (
    <Router>
      <Navbar/>
      <Carousel/>
      <div className="container p-1">
        <Route exact path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
      </div> 
      <Footer/>
    </Router>
  );
}

export default App;
