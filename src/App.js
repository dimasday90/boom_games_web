import React from "react";
import Navbar from "./components/Navbar";
import GameList from "./views/GameList";
import GameDetail from "./views/GameDetail"
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default class App extends React.Component {
  componentDidMount() {
    document.title = "BoomGames React";
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <GameList />
          </Route>
          <Route exact path="/games/:id">
            <GameDetail />
          </Route>
        </Switch>
      </Router>
    );
  }
}
