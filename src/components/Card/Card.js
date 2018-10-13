import React, {Component} from 'react';
import './Card.css'
import PropTypes from 'prop-types';


class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: false
		}
	}


selectCard = (card) => {
	this.setState({ isSelected: !this.state.isSelected})
}

render() {
	const { name, species, homeWorld, vehicles, people } = this.props
	const { isSelected } = this.state

if (people) {
	console.log(people)
	return (
		<div className="Card">
	    <div className="fav-btn-card-container">
		    <h3>{name}</h3>
		    <button 
		    	className={ `fav-btn ${isSelected ? "fav-btn-active" : "fav-btn-inactive"}` }
		    	onClick={() => this.selectCard(name)}
		    >
		    	<i className="fas fa-jedi"></i>
		    </button>
	    </div>
	    <p>Species: {species.speciesName}</p>
	    <p>Language: {species.language}</p>
	    <p>Homeworld: {homeWorld.planetName}</p>
	    <p>Population: {homeWorld.planetPop}</p>
		</div>
	)
} else if (vehicles) {
	console.log(vehicles)
	return (
		<div className="Card">
	    <div className="fav-btn-card-container">
		    <h3>{vehicles.name}</h3>
		    <button 
		    	className={ `fav-btn ${isSelected ? "fav-btn-active" : "fav-btn-inactive"}` }
		    	onClick={() => this.selectCard(name)}
		    >
		    	<i className="fas fa-jedi"></i>
		    </button>
	    </div>
	    <p>Model: {vehicles.model}</p>
	    <p>Class: {vehicles.class.toUpperCase()}</p>
	    <p>Passengers: {vehicles.passengers}</p>
		</div>
	)
}
}
}

export default Card