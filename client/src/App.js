import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './core/Navbar'
import Home from './core/Form'
import Certificate from './core/Certificate'

const App = (props)=>{
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/certificate" exact component={Certificate}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
