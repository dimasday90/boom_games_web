import React from "react";
import Navbar from "./components/Navbar";
import GameList from "./views/GameList";
import "./App.css";

export default class App extends React.Component {
  componentDidMount() {
    document.title = "BoomGames React";
  }

  render() {
    return (
      <>
        <Navbar />
        <GameList />
      </>
    );
  }
}
