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
	const { name, species, homeWorld } = this.props
	const { isSelected } = this.state

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
}
}

export default Card