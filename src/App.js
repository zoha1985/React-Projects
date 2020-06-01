import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Container/Home';
import Header from './components/header';
import Hero from './components/hero';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AboutUs from './Container/AboutUs';
import Post from './Container/post';
import ContractUs from './Container/contractus';

function App() {
  return (


    <Router>
    <div className="App">
     
    <Header/>
    <Hero/>

    <Route path="/" exact component={Home}/>
    <Route path="/aboutus" component={AboutUs}/>
    <Route path="/contractus" component={ContractUs}/>
    <Route path="/Post" component={Post}/>

 
      
    </div>
    </Router>
  );
}

export default App;
