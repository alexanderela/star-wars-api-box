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
      // planets: []
    }
  }

  async componentDidMount() {
    const films = await this.state.dataCleaner.getMovie()
    const people = await this.state.dataCleaner.getPerson()
    // console.log(people)
    this.setState({ films, people })
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

  render() {
    const { films, people } = this.state
    return (
      <div className="App">
        <header className="header">
          <img className="app-title" src="https://fontmeme.com/permalink/181011/77642b270be5b116183f969599b14285.png"/>
          <div className="button-container">
            <button className="cat-button people-button" onClick={this.hideSidebar}>People</button>
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
          // <h1 className="app-title">SWAPI Box</h1>
          // 
