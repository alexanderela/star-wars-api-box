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

  setLocalStorage = (key, category) => {
    localStorage.setItem(key, JSON.stringify(category))
  }

  getLocalStorage = (categoryName) => {
    if(localStorage.length) {
      JSON.parse(localStorage.getItem(categoryName))
    }
  }


  showFilm = async () => {
    const films = await this.state.dataCleaner.getMovie()
    
    this.setState({ films })
  }

  toggleCategoryState = (categoryName) => {
    console.log('toggleCategory hooked up')
    if (categoryName === 'people') {
      this.setState({ peopleSelected: true })
      this.showPeople()
    } else if (categoryName === 'planets') {
      this.setState({ planetsSelected: true })
      this.showPlanets()
    } else if (categoryName === 'vehicles') {
      this.setState({ vehiclesSelected: true })
      this.showVehicles()
    }
  }

  showPeople = async (e) => {  
    const people = await this.state.dataCleaner.getPerson()
    // console.log(people + 'state: ' + this.state.peopleSelected)
    if (this.state.peopleSelected === true) {
      this.setState({
        people: [], 
        vehicles: [],
        planets: [],
        peopleSelected: false 
      })
    } else {
    this.setState({ 
      people: people,
      vehicles: [],
      planets: [], 
      peopleSelected: true,  
      vehiclesSelected: false,        
      planetsSelected: false       
      })
    this.setLocalStorage()
    }
  }

  showVehicles = async (e) => {
    const vehicles = await this.state.dataCleaner.getVehicle()
    if (this.state.vehiclesSelected === true) {
      this.setState({ 
        vehicles: [],
        people: [],
        planets: [],
        vehiclesSelected: false 
      })
    } else {
      this.setState({  
        vehicles: vehicles, 
        people: [],
        planets: [],
        vehiclesSelected: true,  
        peopleSelected: false,        
        planetsSelected: false        
      })
    }
  }

  showPlanets = async (e) => {
    const planets = await this.state.dataCleaner.getPlanet()
    if (this.state.planetsSelected === true) {
      this.setState({ 
        vehicles: [],
        people: [],
        planets: [],
        planetsSelected: false 
      })
    } else {
      this.setState({  
        planets: planets,
        vehicles: [], 
        people: [],
        planetsSelected: true,        
        peopleSelected: false,        
        vehiclesSelected: false  
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