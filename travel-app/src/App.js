import {  Route, Routes  } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import './index.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Buy from './Components/Buy';
import Sell from './Components/Sell';
import Login from './Components/Login';
import Signup from './Components/Signup';




function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route  exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/services' Component={Services} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/buy' Component={Buy} />
        <Route exact path='/Sell' Component={Sell} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/signup' Component={Signup} />
      </Routes>
    </>
  );
}

export default App;
