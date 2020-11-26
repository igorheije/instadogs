import React from 'react';

import './App.css';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Login } from './Components/Login/Login';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
        
      <Route exact path ="/" component={Home}></Route>
      <Route path ="/login"><Login/></Route>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
