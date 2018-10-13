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
      people: [],
      vehicles: [],
      planets: [],
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
    }
  }


  async componentDidMount() {
    this.showFilm()
  }

  showFilm = async () => {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
  }

  showPeople = async (e) => {
    const people = await this.state.dataCleaner.getPerson()
    if (this.state.peopleSelected === true) {
      this.setState({ peopleSelected: false })
    } else {
    this.setState({ 
      people: people, 
      vehiclesSelected: false,        
      planetsSelected: false,        
      peopleSelected: true  
      })
    }
  }

  showVehicles = async (e) => {
    const vehicles = await this.state.dataCleaner.getVehicle()
    if (this.state.vehiclesSelected === true) {
      this.setState({ vehiclesSelected: false })
    } else {
    this.setState({  
      vehicles: vehicles, 
      peopleSelected: false,        
      planetsSelected: false,        
      vehiclesSelected: true  
      })
    }
  }

  showPlanets = async (e) => {
    const planets = await this.state.dataCleaner.getPlanet()
    console.log(planets)
    if (this.state.planetSelected === true) {
      this.setState({ planetSelected: false })
    } else {
      this.setState({
        planets: planets,
        peopleSelected: false,        
        vehiclesSelected: false, 
        planetsSelected: true        
      })
    }
  }

  render() {
    const { films, people, vehicles, planets, peopleSelected, planetsSelected, vehiclesSelected } = this.state

    if (peopleSelected) {
    return (
      <div className="App">
        <header className="header">
          <h1 className="app-title">SWAPI Box</h1>
          <div className="button-container">
            <button 
              className={`cat-button people-button ${peopleSelected ? "cat-button-active" : "cat-button-inactive" }`}
              name="people"
              onClick={this.showPeople}
            >People</button>
            <button 
              className={`cat-button planets-button ${planetsSelected ? "cat-button-active" : "cat-button-inactive" } ? `}
              name="planets"
              onClick={this.showPlanets}
            >Planets</button>
            <button 
              className={`cat-button vehicles-button ${vehiclesSelected ? "cat-button-active" : "cat-button-inactive" }`}
              name="vehicles"
              onClick={this.showVehicles}
            >Vehicles</button>
            <FavoriteButton className="FavoriteButton" />
          </div>
        </header>
        {people ? <CardContainer people={people} /> : null}
      </div>
    );
    } else if (vehiclesSelected) {
      return (
       <div className="App">
        <header className="header">
          <h1 className="app-title">SWAPI Box</h1>
          <div className="button-container">
            <button 
              className={`cat-button people-button ${peopleSelected ? "cat-button-active" : "cat-button-inactive" }`}
              name="people"
              onClick={this.showPeople}
            >People</button>
            <button 
              className={`cat-button planets-button ${planetsSelected ? "cat-button-active" : "cat-button-inactive" } ? `}
              name="planets"
              onClick={this.showPlanets}
            >Planets</button>
            <button 
              className={`cat-button vehicles-button ${vehiclesSelected ? "cat-button-active" : "cat-button-inactive" }`}
              name="vehicles"
              onClick={this.showVehicles}
            >Vehicles</button>
            <FavoriteButton className="FavoriteButton" />
          </div>
        </header>
        {vehicles ? <CardContainer vehicles={vehicles} /> : null}
      </div>
    ); 
    } else if (planetsSelected) {
      return (
       <div className="App">
          <header className="header">
            <h1 className="app-title">SWAPI Box</h1>
            <div className="button-container">
              <button 
                className={`cat-button people-button ${peopleSelected ? "cat-button-active" : "cat-button-inactive" }`}
                name="people"
                onClick={this.showPeople}
              >People</button>
              <button 
                className={`cat-button planets-button ${planetsSelected ? "cat-button-active" : "cat-button-inactive" } ? `}
                name="planets"
                onClick={this.showPlanets}
              >Planets</button>
              <button 
                className={`cat-button vehicles-button ${vehiclesSelected ? "cat-button-active" : "cat-button-inactive" }`}
                name="vehicles"
                onClick={this.showVehicles}
              >Vehicles</button>
              <FavoriteButton className="FavoriteButton" />
            </div>
          </header>
          {planets ? <CardContainer planets={planets} /> : null}
        </div>
    );
    } else {
      return (
       <div className="App">
          <header className="header">
            <h1 className="app-title">SWAPI Box</h1>
            <div className="button-container">
              <button 
                className={`cat-button people-button ${peopleSelected ? "cat-button-active" : "cat-button-inactive" }`}
                name="people"
                onClick={this.showPeople}
              >People</button>
              <button 
                className={`cat-button planets-button ${planetsSelected ? "cat-button-active" : "cat-button-inactive" } ? `}
                name="planets"
                onClick={this.showPlanets}
              >Planets</button>
              <button 
                className={`cat-button vehicles-button ${vehiclesSelected ? "cat-button-active" : "cat-button-inactive" }`}
                name="vehicles"
                onClick={this.showVehicles}
              >Vehicles</button>
              <FavoriteButton className="FavoriteButton" />
            </div>
          </header>
          <Sidebar films={films}/>
        </div>
      )
    }
  }
}

export default App;