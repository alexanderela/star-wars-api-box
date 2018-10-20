import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Sidebar from '../Sidebar/Sidebar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DataCleaner from '../../DataCleaner.js';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import Nav from '../Nav/Nav.js';
import ErrorPopup from '../ErrorPopup/ErrorPopup.js';


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
      planetsSelected: false,
      favorites: [],
      scroll: true,
      favoritesSelected: false,
      showErrorPopup: false
    }
  }

  async componentDidMount() {
    this.getFilm()
    this.getPeople()
    this.getVehicles()
    this.getPlanets()
  }

  toggleFavorites = async (entry) => {
    
    let favorites;
    const { type, id } = entry

    const category = this.state[type].map(card => {
      if(card.id === id) {
        return {...card, isFavorite: !card.isFavorite}
      }
      return card
    })

    if (!this.inFavorites(entry)) {
      favorites = [...this.state.favorites, entry]
    } else {
      favorites = this.state.favorites.filter(card => card.id !== id)      
    }

    await this.setState({ [type]: category, favorites: favorites })
    await this.setLocalStorage('favorites', favorites)
    await this.setLocalStorage( [type], category)
  }

  inFavorites = (entry) => {
    return this.state.favorites.find((fav) => fav.id === entry.id)
  }

  toggleErrorPopup = () => {
    this.setState({
      showErrorPopup: !this.state.showErrorPopup
    })
  }

  showFavorites = () => {
    if(this.state.favorites.length) {
      this.setState({ 
        favoritesSelected: true,
        peopleSelected: false,
        planetsSelected: false,
        vehiclesSelected: false, 
      })
    } else {
        this.toggleErrorPopup()  
    }
  }

  getFilm = async () => {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
  }

  getPeople = async () => {
    const people = await this.state.dataCleaner.getPerson()
    this.setState({ people })
    this.setLocalStorage('people', people)
  }

  getPlanets = async () => {
    const planets = await this.state.dataCleaner.getPlanet()
    this.setState({ planets })
    this.setLocalStorage('planets', planets)
  }

  getVehicles = async () => {
    const vehicles = await this.state.dataCleaner.getVehicle()
    this.setState({ vehicles })
    this.setLocalStorage('vehicles', vehicles)
  }

  toggleCategoryState = (categoryName) => {
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

  setLocalStorage = (key, category) => {
    localStorage.setItem(key, JSON.stringify(category))
  }

  getLocalStorage = (categoryName) => {
    if(localStorage.length) {
      return JSON.parse(localStorage.getItem(categoryName))
    }
  }

  showPeople = async (e) => {  
    const { people, peopleSelected } = this.state
    if (!localStorage.people) {
      this.setLocalStorage('people', people)
    } 

    const retrievedPeople = this.getLocalStorage('people')
    this.setState({ 
      people: retrievedPeople,
      peopleSelected: true,
      planetsSelected: false,
      vehiclesSelected: false,
      favoritesSelected: false,
      scroll: false
    })
  }
  
  showVehicles = async (e) => {
    const { vehicles, vehiclesSelected } = this.state
    if (!localStorage.vehicles) {
      this.setLocalStorage('vehicles', vehicles)
    }

    const retrievedVehicles = this.getLocalStorage('vehicles')
    this.setState({
      vehicles: retrievedVehicles,
      vehiclesSelected: true,
      peopleSelected: false,
      planetsSelected: false,
      favoritesSelected: false,
      scroll: false
    })
  }

  showPlanets = async (e) => {
    const { planets, planetsSelected } = this.state
    if (!localStorage.planets) {
      this.setLocalStorage('planets', planets)
    }

    const retrievedPlanets = this.getLocalStorage('planets')
    this.setState({
      planets: retrievedPlanets,
      planetsSelected: true,
      peopleSelected: false,
      vehiclesSelected: false,
      favoritesSelected: false,
      scroll: false
    })
  }

  render() {
    const { 
            films, 
            people, 
            vehicles, 
            planets, 
            peopleSelected, 
            planetsSelected, 
            vehiclesSelected, 
            favorites, 
            scroll,
            favoritesSelected,
            showErrorPopup
          } = this.state

    return (
      <div className="App">
        <header className="header">
          <h1 className="app-title">SWAP<span className="title-i">I</span> Box</h1>
          <Nav
            showPeople={this.showPeople}
            showPlanet={this.showPlanets}
            showVehicle={this.showVehicles}
            toggleCategoryState={this.toggleCategoryState}
            showFavorites={this.showFavorites}
            favorites={favorites}
            toggleErrorPopup={this.toggleErrorPopup}
          />
        </header>
        {showErrorPopup 
          ?
          <ErrorPopup
            text="close"
            closeError={this.toggleErrorPopup}
          />
          : <div className="error-popup-placeholder"></div>
        }
        
        {vehiclesSelected && 
        <CardContainer 
          entries={vehicles} 
          toggleFavorites={this.toggleFavorites}
          favorites={favorites}
          />}
        {planetsSelected && 
        <CardContainer 
          entries={planets} 
          toggleFavorites={this.toggleFavorites}
          favorites={favorites}
          />}
        {favoritesSelected && 
        <CardContainer
          entries={favorites} 
          toggleFavorites={this.toggleFavorites}
          favorites={favorites}
          />}
        
        <Route exact path="/" render={(props) => <Sidebar {...props} films={films} />}
        />
        <Route 
          exact path="/people" 
          render={(props) => <CardContainer {...props} 
            entries={people} 
            toggleFavorites={this.toggleFavorites} 
            favorites={favorites} 
          />}
        />
      </div>
    );
  }
}

export default App;

// {scroll &&
//         <Sidebar films={films}/>
//         }

// {peopleSelected && 
//         <CardContainer 
//           entries={people}
//           toggleFavorites={this.toggleFavorites}
//           favorites={favorites}
//            />}