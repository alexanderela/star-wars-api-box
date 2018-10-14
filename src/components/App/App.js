import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DataCleaner from '../../helper.js';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import Nav from '../Nav/Nav.js';


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
    console.log(films)
    this.setState({ films })
  }

  showPeople = async (e) => {  
    const people = await this.state.dataCleaner.getPerson()
    console.log(people)
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
    console.log(vehicles)
    if (this.state.vehiclesSelected === true) {
      // console.log('1st conditional firing')
      this.setState({ vehiclesSelected: false })
    } else {
      // console.log('2nd conditional firing')
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
          <Nav 
            showPeople={this.showPeople}
            showPlanet={this.showPlanets}
            showVehicle={this.showVehicles}
          />
        </header>
        {people ? <CardContainer 
            className="Card-Container-people" 
            people={people} /> : null}
      </div>
    );
    } else if (vehiclesSelected) {
      return (
       <div className="App">
        <header className="header">
          <h1 className="app-title">SWAPI Box</h1>
          <Nav 
            showPeople={this.showPeople}
            showPlanet={this.showPlanets}
            showVehicle={this.showVehicles}
          />
        </header>
        {vehicles ? <CardContainer vehicles={vehicles} /> : null}
      </div>
    ); 
    } else if (planetsSelected) {
      return (
       <div className="App">
          <header className="header">
            <h1 className="app-title">SWAPI Box</h1>
            <Nav 
            showPeople={this.showPeople}
            showPlanet={this.showPlanets}
            showVehicle={this.showVehicles}
          />
          </header>
          {planets ? <CardContainer planets={planets} /> : null}
        </div>
    );
    } else {
      return (
       <div className="App">
          <header className="header">
            <h1 className="app-title">SWAPI Box</h1>
             <Nav 
            showPeople={this.showPeople}
            showPlanet={this.showPlanets}
            showVehicle={this.showVehicles}
          />
          </header>
          <Sidebar films={films}/>
        </div>
      )
    }
  }
}

export default App;