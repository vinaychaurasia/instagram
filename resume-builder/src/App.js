import React, { Component } from 'react';
import Header from "./components/presentation/Header"
import Landing from './components/presentation/Landing';
import Register from './components/presentation/Register';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectTempPage from './components/presentation/SelectTempPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <Router>
          <Switch>
            <Route path="/" exact>
              <Landing></Landing>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/selectTempPage">
              <SelectTempPage></SelectTempPage>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;