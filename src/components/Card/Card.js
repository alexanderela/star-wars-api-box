import React, {Component} from 'react';
import './Card.css'
import PropTypes from 'prop-types';
import CardHelper from '../CardHelper/CardHelper'

const Card = ({ entry, toggleFavorites, favorites, isFavorite }) => { 
	const cardProperties = entry.properties.map(property => {
		return (
			<p key={property[0]} className="card-text">
				<span className="card-header"></span>
				{property}
			</p>
		)
	})

	return (
		<div className="Card">
	    <div className="fav-btn-card-container">
		    <h3>{entry.name}</h3>
		    <button 
		    	className={ `fav-btn people-fav 
		    		${(isFavorite) 
		    			? "fav-btn-active" 
		    			: "fav-btn-inactive"}` }
		    	onClick={() => toggleFavorites(entry)}
		    >
		    	<i className="fas fa-jedi"></i>
		  </button>
	   </div>
	   {cardProperties}
		</div>
	)
}

Card.propTypes = {
		people: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object
]),
	vehicles: PropTypes.object,
	planets: PropTypes.object,
	addToFavorites: PropTypes.func,
	removeFromFavorites: PropTypes.func,
	favorites: PropTypes.array
}

export default Card