import React from 'react';

import './App.css';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Login } from './Components/Login/Login';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {UserStorage} from './UserContext'
import { User } from './Components/User/User';
import { ProtectRouter } from './Components/Help/ProtectRouter';
import { Photo } from './Components/Photo/Photo';
import { UserProfile } from './Components/User/UserProfile';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <UserStorage>
      <Header/>
      <main className="AppBody">
        <Switch>

      <Route exact path ="/" component={Home}></Route>
      <Route path ="/login"><Login/></Route>
      <ProtectRouter path ="/conta" component={User}></ProtectRouter>
      <Route path ="/foto/:id" component={Photo}></Route>
      <Route path ="/perfil/:user" component={UserProfile}></Route>
      <Route path="*" component={NotFound}></Route>
      </Switch>

      </main>
      
      <Footer/>
    </UserStorage>
    </BrowserRouter>
    </div>
  );
}

export default App;
