import React from "react";
import Navbar from "./components/Navbar";
import GameList from "./views/GameList";
import GameDetail from "./views/GameDetail"
import Favorites from "./views/Favorites"
import "./App.css";
import { Provider } from 'react-redux'
import store from './store'
import ThemeContext from './context/ThemeContext'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default class App extends React.Component {
  state = {
    phantom: false
  }

  toggle () {
    this.setState((state) => ({
      phantom: !state.phantom
    }))
  }
  
  componentDidMount() {
    document.title = "BoomGames React";
  }

  render() {
    return (
      <ThemeContext.Provider value={{phantom: this.state.phantom, toggle: this.toggle.bind(this)}}>
        <ThemeContext.Consumer>
          {value => (
            <div style={value.phantom ? {backgroundColor: "black", minHeight: 854} 
            : {/* backgroundColor back to default, so let this be empty object */}
          }>
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
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    );
  }
}
