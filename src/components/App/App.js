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
    this.getFilm()
    this.getPeople()
    this.getPlanets()
    this.getVehicles()
  }

  toggleFavorites = (entry) => {
    console.log(entry)
    let favorites;
    let category;
    const { type, id } = entry
    // const { favorites } = this.state
    // entry.isFavorite = !entry.isFavorite
      // debugger
    category = this.state[type].map(card => {
      if(card.id === id) {
        card.isFavorite = !card.isFavorite
      }
      return card
    })
    if(this.state.favorites.includes(entry)) {
      // entry.isFavorite = false
      // faves = favorites.filter((favorite) => {
      //   return favorite.id !== card.id
      // })
      favorites = this.state.favorites.filter(card => card.id !== id)
      
      this.setState({ [type]: category, favorites: favorites })
      this.setLocalStorage('favorites', favorites)
      this.setLocalStorage( [type], category)
    } else if (!this.state.favorites.includes(entry)) {
      entry.isFavorite = true
      favorites = [...this.state.favorites, entry]
      category = this.state[type].map(card => card)
      this.setState({ [type]: category, favorites: favorites })      
      this.setLocalStorage('favorites', favorites)   
      this.setLocalStorage([type], category)
    }
  }

  // toggleFavorites = (card) => {
  //   card.isFavorite = !card.isFavorite
  //   if (card.isFavorite === true) {
  //     this.addToFavorites(card)
  //   } else if (card.isFavorite === false) {
  //     this.addToFavorites(card)
  //   }
  // }


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

  getFilm = async () => {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
  }

  getPeople = async () => {
    const people = await this.state.dataCleaner.getPerson()
    this.setState({ people })
  }

  getPlanets = async () => {
    const planets = await this.state.dataCleaner.getPlanet()
    this.setState({ planets })
  }

  getVehicles = async () => {
    const vehicles = await this.state.dataCleaner.getVehicle()
    this.setState({ vehicles })
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
    // this.checkLocalStoragePeople(this.state.people)
    const { people, peopleSelected } = this.state
    if (!localStorage.people) {
      this.setLocalStorage('people', people)
      
    } else {
        const retrievedPeople = this.getLocalStorage('people')
        this.setState({ people: retrievedPeople })
      }

    // this.setState({peopleSelected: true})

    // console.log(people)
    // if (this.state.peopleSelected === true) {
    //   this.setState({
    //     people: [], 
    //     vehicles: [],
    //     planets: [],
    //     peopleSelected: false,
    //     scroll: true 
    //   })
    // } else {
    //   this.checkLocalStoragePeople(people)
    //   this.setState({ 
    //     // vehicles: [],
    //     // planets: [], 
    //     peopleSelected: true,  
    //     vehiclesSelected: false,        
    //     planetsSelected: false,
    //     scroll: false       
    //   })
    // }
  }

  // checkLocalStoragePeople = (people) => {
  //   if (!localStorage.people) {
  //     this.setLocalStorage('people', people)
  //   } else {
  //       const retrievedPeople = this.getLocalStorage('people')
  //       this.setState({ people: retrievedPeople })
  //     }
  //   }

  
  showVehicles = async (e) => {
    // if (this.state.vehiclesSelected === true) {
    //   this.setState({ 
    //     vehicles: [],
    //     people: [],
    //     planets: [],
    //     vehiclesSelected: false 
    //   })
    // } else {
    //   this.checkLocalStorageVehicles(vehicles)
    //   this.setState({  
    //     // people: [],
    //     // planets: [],
    //     vehiclesSelected: true,  
    //     peopleSelected: false,        
    //     planetsSelected: false        
    //   })
    // }
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
    // console.log(planets) 
    // if (this.state.planetsSelected === true) {
    //   this.setState({ 
    //     vehicles: [],
    //     people: [],
    //     planets: [],
    //     planetsSelected: false 
    //   })
    // } else {
    //   this.checkLocalStoragePlanets(planets)
    //   this.setState({  
    //     // vehicles: [], 
    //     // people: [],
    //     planetsSelected: true,        
    //     // peopleSelected: false,        
    //     // vehiclesSelected: false  
    //   })
    // }
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
          entries={people}
          toggleFavorites={this.toggleFavorites}
          favorites={favorites}
           />}
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