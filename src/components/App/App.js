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
      planetsSelected: false,
      favorites: [],
      scroll: true,
      favoritesSelected: false
    }
  }

  async componentDidMount() {
    this.showFilm()
  }

  addToFavorites = (card) => {
    let favorites;
    if(this.state.favorites.includes(card)) {
      favorites = this.state.favorites.filter((favorite) => {
        return favorite.id !== card.id
      })
    } else if (!this.state.favorites.includes(card)) {
      favorites = [...this.state.favorites, card]
    }
    this.setState({ favorites })
    this.setLocalStorage('favorites', favorites)   
  }

  removeFromFavorites = (id) => {
    const favorites = this.state.favorites.filter(card => card.id !== id) 
    this.setState({ favorites })
    this.setLocalStorage('favorites', favorites)
  }

  // showFavorites = (allFavs) => {
  //   // console.log(allFavs)
  //   // const allFavInfo = allFavs
  //   // const allFavorites = allFavs.map(fav => fav)
  //   const favorites = this.state.favorites.filter(card => card.id !== allFavorites.id)
  //   const category = this.state[type].filter(card => card.id !== allFavorites.id)
  //   this.setState({ [type]: category, favorites: favorites })   
  // }

  showFilm = async () => {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
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
    const people = await this.state.dataCleaner.getPerson()
    // console.log(people)
    if (this.state.peopleSelected === true) {
      this.setState({
        people: [], 
        vehicles: [],
        planets: [],
        peopleSelected: false,
        scroll: true 
      })
    } else {
      this.checkLocalStoragePeople(people)
      this.setState({ 
        // vehicles: [],
        // planets: [], 
        peopleSelected: true,  
        vehiclesSelected: false,        
        planetsSelected: false,
        scroll: false       
      })
    }
  }

  checkLocalStoragePeople = (people) => {
    if (!localStorage.people) {
      this.setState({ people })
      this.setLocalStorage('people', people)
    } else {
        const retrievedPeople = this.getLocalStorage('people')
        this.setState({ people: retrievedPeople })
      }
    }

  
  showVehicles = async (e) => {
    const vehicles = await this.state.dataCleaner.getVehicle()
    console.log(vehicles)
    if (this.state.vehiclesSelected === true) {
      this.setState({ 
        vehicles: [],
        people: [],
        planets: [],
        vehiclesSelected: false 
      })
    } else {
      this.checkLocalStorageVehicles(vehicles)
      this.setState({  
        // people: [],
        // planets: [],
        vehiclesSelected: true,  
        peopleSelected: false,        
        planetsSelected: false        
      })
    }
  }

  checkLocalStorageVehicles = (vehicles) => {
    if (!localStorage.vehicles) {
      this.setState({ vehicles })
      this.setLocalStorage('vehicles', vehicles)
    } else {
        const retrievedVehicles = this.getLocalStorage('vehicles')
        this.setState({ vehicles: retrievedVehicles })
      }
    }

  showPlanets = async (e) => {
    const planets = await this.state.dataCleaner.getPlanet() 
    console.log(planets) 
    if (this.state.planetsSelected === true) {
      this.setState({ 
        vehicles: [],
        people: [],
        planets: [],
        planetsSelected: false 
      })
    } else {
      this.checkLocalStoragePlanets(planets)
      this.setState({  
        // vehicles: [], 
        // people: [],
        planetsSelected: true,        
        // peopleSelected: false,        
        // vehiclesSelected: false  
      })
    }
  }

  checkLocalStoragePlanets = (planets) => {
    if (!localStorage.planets) {
      this.setState({ planets })
      this.setLocalStorage('planets', planets)
    } else {
        const retrievedPlanets = this.getLocalStorage('planets')
        this.setState({ planets: retrievedPlanets })
      }
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
            scroll ,
            favoritesSelected
          } = this.state

    return (
      <div className="App">
        <header className="header">
          <h1 className="app-title">SWAPI Box</h1>
          <Nav 
            showPeople={this.showPeople}
            showPlanet={this.showPlanets}
            showVehicle={this.showVehicles}
            toggleCategoryState={this.toggleCategoryState}
            showFavorites={this.showFavorites}
            favorites={favorites}
          />
        </header>
        {peopleSelected && 
        <CardContainer 
          type={people}
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
          favorites={favorites}
           />}
        {vehiclesSelected && 
        <CardContainer 
          type={vehicles} 
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
          favorites={favorites}
          />}
        {planetsSelected && 
        <CardContainer 
          type={planets} 
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
          favorites={favorites}
          />}
        {favoritesSelected && 
        <CardContainer
          type={favorites} 
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
          favorites={favorites}
          />}
        {scroll &&
        <Sidebar films={films}/>
        }
      </div>
    );
  }
}

export default App;

  // removeFromFavorites = (id, type) => {
  //   const favorites = this.state.favorites.filter(card => card.id !== id)
  //   const category = this.state[type].filter(card => card.id !== id)
  //   this.setState({ [type]: category, favorites: favorites })
  // }