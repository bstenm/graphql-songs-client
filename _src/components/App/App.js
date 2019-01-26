import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import routes from '../../config/routes';
import Header from '../Header';
import About from '../About';

const App = () => (
      <div className="App">
            <Header />
            <Switch>
                  <Route path={routes.About} component={About} />
            </Switch>
      </div>
);

export default App;
