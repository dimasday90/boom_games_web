import React from "react";
import Navbar from "./components/Navbar";
import GameList from "./views/GameList";
import GameDetail from "./views/GameDetail"
import Favorites from "./views/Favorites"
import "./App.css";
import { Provider } from 'react-redux'
import store from './store'

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
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <GameList />
            </Route>
            <Route exact path="/games/:id">
              <GameDetail />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
