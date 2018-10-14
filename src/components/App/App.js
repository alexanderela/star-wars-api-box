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
    // console.log(films)
    this.setState({ films })
  }

  toggleCategoryState = (categoryName) => {
    console.log('toggleCategory hooked up')
    if (categoryName === 'people') {
      this.setState({ peopleSelected: true })
      this.showPeople()
    } else if (categoryName === 'vehicles') {
      this.setState({ vehiclesSelected: true })
      this.showVehicles()
    } else if (categoryName === 'planets') {
      this.setState({ planetsSelected: true })
      this.showPlanets()
    }
  }

  showPeople = async (e) => {  
    const people = await this.state.dataCleaner.getPerson()
    // console.log(people + 'state: ' + this.state.peopleSelected)
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
            toggleCategoryState={this.toggleCategoryState}
          />
        </header>
        {people ? <CardContainer people={people} /> : null}
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
            toggleCategoryState={this.toggleCategoryState}
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
            toggleCategoryState={this.toggleCategoryState}
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
            toggleCategoryState={this.toggleCategoryState}            
          />
          </header>
          <Sidebar films={films}/>
        </div>
      )
    }
  }
}

export default App;