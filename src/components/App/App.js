import React, { Component } from 'react';
import './App.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DataCleaner from '../../helper.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCleaner: new DataCleaner(),
      films: {}
    }
  }

  async componentDidMount() {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
  }

  render() {
    const { films } = this.state
    return (
      <div className="App">
        <header className="header">
          <h1>SWAPI Box</h1>
          <FavoriteButton />
        </header>
        { films && <Sidebar films={films}/>}
        <CardContainer />
      </div>
    );
  }
}

export default App;