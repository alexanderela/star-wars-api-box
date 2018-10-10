import React, { Component } from 'react';
import './App.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import dataCleaner from '../../helper.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

componentDidMount() {
  dataCleaner();
}

  render() {
    return (
      <div className="App">
        <header className="header">
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
