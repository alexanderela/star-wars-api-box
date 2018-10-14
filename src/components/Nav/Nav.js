import React, {Component} from 'react';
import './Nav.css'
import PropTypes from 'prop-types';


class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: false
		}
	}



render() {

	
	return(
		<div className="button-container">
		    <button 
		      className={`cat-button people-button ${peopleSelected ? "cat-button-active" : "cat-button-inactive" }`}
		      name="people"
		      onClick={this.showPeople}
		    >People</button>
		    <button 
		      className={`cat-button planets-button ${planetsSelected ? "cat-button-active" : "cat-button-inactive" } ? `}
		      name="planets"
		      onClick={this.showPlanets}
		    >Planets</button>
		    <button 
		      className={`cat-button vehicles-button ${vehiclesSelected ? "cat-button-active" : "cat-button-inactive" }`}
		      name="vehicles"
		      onClick={this.showVehicles}
		    >Vehicles</button>
		    <FavoriteButton className="FavoriteButton" />
		  </div>
		)
	}
}