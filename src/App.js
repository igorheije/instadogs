import React from 'react';

import './App.css';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Login } from './Components/Login/Login';
import {BrowserRouter, Route} from 'react-router-dom'
import {UserStorage} from './UserContext'
import { User } from './Components/User/User';
import { ProtectRouter } from './Components/Help/ProtectRouter';

function App() {
  return (
    <BrowserRouter>
    <UserStorage>
      <Header/>

      <Route exact path ="/" component={Home}></Route>
      <Route path ="/login"><Login/></Route>
      <ProtectRouter path ="/conta" ><User/></ProtectRouter>
  
      <Footer/>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;
