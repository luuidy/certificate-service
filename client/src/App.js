import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './core/Form'

const App = ()=>{
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
