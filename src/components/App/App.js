import React, { Component } from 'react';
import './App.css';

import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          Header
          <h1>SWAPI Box</h1>
          <FavoriteButton />
        </header>
        <Sidebar />
        <CardContainer />
      </div>
    );
  }
}

export default App;
