import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './app.css';
import Login from './components/User/Login';
import UserAuthorization from './components/User/UserAuth';
import Base from './components/Base/Base';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={UserAuthorization} />
        <Route path="/base" component={Base} />
      </div>
    );
  }
}

export default App;
