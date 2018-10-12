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
      isSelected: ''
      // planets: []
    }
  }

  async componentDidMount() {
    const films = await this.state.dataCleaner.getMovie()
    this.setState({ films })
  }

  showCards = async (e) => {
    // const { dataCleaner } = this.state
    const { name } = e.target
    const { dataCleaner } = this.state
    
    const people = await dataCleaner.getPerson()
    const planets = 'planets'
    const vehicles = 'vehicles'
    const dataArray = [people, planets, vehicles]

    const results = dataArray.forEach((arrayItem) => {
      // if (displayCategory === name) { 
        this.setState({[name]: arrayItem})
      // }
    })



    // const stateKeys = Object.keys(this.state)
    // const matchingStateKey = stateKeys.forEach((key) => {
    //   if (displayCategory == key) {
    //     this.setState({ [matchingStateKey]: [displayCategory]})
    //   }
    // })
  }


  hideSidebar = () => {
    var sidebar = document.getElementById("Sidebar");
    sidebar.classList.add('Sidebar-hidden')
    // sidebar.classList.remove('.Sidebar');
    // sidebar.classList.add('Sidebar-hidden');

    // if (sidebar.classList.contains('Sidebar')) {
    //     sidebar.classList.remove('Sidebar');
    //     // alert("remove faq display!");
    //   } else {
    //     sidebar.classList.add('Sidebar-hidden');
    //     // alert("add faq display!");
    //   }
  }

  // handleSelected = (e) => {
  //   const { name } = e.target
  //   this.setState({ isSelected: !this.state.isSelected})
  // }

  // handleProps = (e) => {
  //   // debugger
  // }

  handleSelected = (e) => {
    const { name } = e.target
    this.setState({ isSelected: name})

    // this.newProps(e)
  }

  // newProps = (e) => {
  //   const stateKeys = Object.keys(this.state)
  //   const matchingStateKey = stateKeys.find((key) => {
  //     return key === e.target.name
  //   })
  //   return this.state[matchingStateKey]
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
              onClick={this.showCards}
            >People</button>
            <button className="cat-button planets-button">Planets</button>
            <button className="cat-button vehicles-button">Vehicles</button>
            <FavoriteButton className="FavoriteButton" />
          </div>
        </header>
        { films && <Sidebar id="Sidebar" films={films}/>}
        <CardContainer newProps={this.newProps} people={people}/>
      </div>
    );
  }
}

export default App;
            // <button className="cat-button people-button" onClick={this.hideSidebar}>People</button>