import React, {Component} from 'react';
import './Nav.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import PropTypes from 'prop-types';


class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
      peopleSelected: false,
      vehiclesSelected: false,
      planetsSelected: false
		}
	}

	handlePeopleClick = (e) => {
		if (this.state.peopleSelected === true) {
			const { name } = e.target
			this.setState({ peopleSelected: false })
			this.props.toggleCategoryState(name)
		} else {
			this.setState({ 
				peopleSelected: true,      
				vehiclesSelected: false,
      	planetsSelected: false 
			})	
			this.props.showPeople()
		}
	}

	handlePlanetClick = (e) => {
		const { name } = e.target
		if (this.state.planetsSelected === true) {
			this.setState({ planetsSelected: false })
			this.props.toggleCategoryState(name)
		} else {
			this.setState({ 
				peopleSelected: false,      
				vehiclesSelected: false,
				planetsSelected: true 
			})	
			this.props.showPlanet()
		}
	}

	handleVehicleClick = (e) => {
		const { name } = e.target
		if (this.state.vehiclesSelected === true) {
			this.setState({ vehiclesSelected: false })
			this.props.toggleCategoryState(name)
		} else {
			this.setState({ 				
				peopleSelected: false,      
				vehiclesSelected: true,
				planetsSelected: false, 
			})	
			this.props.showVehicle()
		}
	}

render() {
	const { showPeople, showVehicles, showPlanets } = this.props
	const { peopleSelected, planetsSelected, vehiclesSelected } = this.state
	
	return(
		<div className="button-container">
		    <button 
		      className={`cat-button people-button 
		      	${peopleSelected 
		      		? "cat-button-active" 
		      		: "cat-button-inactive" }`}
		      name="people"
		      onClick={this.handlePeopleClick}
		    >People</button>
		    <button 
		      className={`cat-button planets-button 
		      	${planetsSelected 
		      		? "cat-button-active" 
		      		: "cat-button-inactive" }`}
		      name="planets"
		      onClick={this.handlePlanetClick}
		    >Planets</button>
		    <button 
		      className={`cat-button vehicles-button 
		      	${vehiclesSelected 
		      		? "cat-button-active" 
		      		: "cat-button-inactive" }`}
		      name="vehicles"
		      onClick={this.handleVehicleClick}
		    >Vehicles</button>
		    <FavoriteButton className="FavoriteButton" />
		  </div>
		)
	}
}

Nav.propTypes = {
	showPeople: PropTypes.func,
	showVehicle: PropTypes.func,
	showPlanet: PropTypes.func
}

export default Nav;