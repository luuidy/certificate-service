import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './core/Navbar'
import Home from './core/Form'

const App = ()=>{
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
