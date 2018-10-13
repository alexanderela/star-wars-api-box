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
      isSelected: false
      // planets: []
    }
  }

  async componentDidMount() {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
  }

  showPeopleCards = async (e) => {
    this.setState({ people, isSelected: false })
    this.setState({ people, isSelected: true })
    const { name } = e.target
    const { dataCleaner } = this.state
    const people = await dataCleaner.getPerson()
    this.setState({ people })
  }


  // hideSidebar = () => {
  //   var sidebar = document.getElementById("Sidebar");
  //   sidebar.classList.add('Sidebar-hidden')
  // }


  render() {
    const { films, people, isSelected } = this.state
    return (
      <div className="App">
        <header className="header">
          <h1 className="app-title">SWAPI Box</h1>
          <div className="button-container">
            <button 
              className={`cat-button people-button ${isSelected ? "cat-button-active" : "cat-button-inactive" }`}
              name="people"
              onClick={this.showPeopleCards}
            >People</button>
            <button className="cat-button planets-button">Planets</button>
            <button className="cat-button vehicles-button">Vehicles</button>
            <FavoriteButton className="FavoriteButton" />
          </div>
        </header>
        { films && <Sidebar id="Sidebar" films={films}/>}
        <CardContainer people={people}/>
      </div>
    );
  }
}

export default App;