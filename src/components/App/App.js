import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DataCleaner from '../../helper.js';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCleaner: new DataCleaner(),
      films: {},
      // people: [],
      planets: []
    }
  }

  async componentDidMount() {
    const films = await this.state.dataCleaner.getMovie()
    // const people = await this.state.dataCleaner.getPerson()
    const planets = await this.state.dataCleaner.getPlanet()
    console.log(planets)
    this.setState({ films })
  }

  render() {
    const { films } = this.state
    return (
      <div className="App">
        <header className="header">
          <img className="app-title" src="https://fontmeme.com/permalink/181011/77642b270be5b116183f969599b14285.png"/>
          <div className="button-container">
            <button className="cat-button people-button">People</button>
            <button className="cat-button planets-button">Planets</button>
            <button className="cat-button vehicles-button">Vehicles</button>
            <FavoriteButton className="FavoriteButton" />
          </div>
        </header>
        { films && <Sidebar films={films}/>}
        <CardContainer />
      </div>
    );
  }
}

export default App;
          // <h1 className="app-title">SWAPI Box</h1>
