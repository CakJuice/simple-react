import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import routes from './routes';
import './App.css';
import AppRouter from './AppRouter';

const App = props =>
  <Router>
    <Switch>
      {routes.map((route, i) =>
        <AppRouter key={i} {...route} />  
      )}
    </Switch>
  </Router>

export default App;
