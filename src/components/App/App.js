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
    const people = await this.state.dataCleaner.getPerson()
    // console.log(people)
    this.setState({ films, people })
  }

  // handleSelected = (e) => {
  //   const { name } = e.target
  //   this.setState({ isSelected: !this.state.isSelected})
  // }

  handleProps = (e) => {
    // debugger
    this.newProps(e)
    console.log('handleProps hooked up')
  }

  newProps = (e) => {
    const stateKeys = Object.keys(this.state)
    const matchingStateKey = stateKeys.find((key) => {
      return key === e.target.name
    })
    this.state[matchingStateKey]
    console.log(this.state[matchingStateKey])
    return this.state[matchingStateKey]
  }




  render() {
    const { films, people } = this.state
    return (
      <div className="App">
        <header className="header">
          <img className="app-title" src="https://fontmeme.com/permalink/181011/77642b270be5b116183f969599b14285.png"/>
          <div className="button-container">
            <button 
              className="cat-button people-button"
              name="people"
              onClick={this.handleProps}
            >People</button>
            <button className="cat-button planets-button">Planets</button>
            <button className="cat-button vehicles-button">Vehicles</button>
            <FavoriteButton className="FavoriteButton" />
          </div>
        </header>
        { films && <Sidebar films={films}/>}
        <CardContainer newProps={this.newProps} people={people}/>
      </div>
    );
  }
}

export default App;
          // <h1 className="app-title">SWAPI Box</h1>
          // 
