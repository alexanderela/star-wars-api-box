import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({type, addToFavorites, removeFromFavorites, favorites}) => {
	let cards

	cards = type.map(item => {
		return <Card 
							type={type}
							key={type.name} 
							addToFavorites={addToFavorites}
        			removeFromFavorites={removeFromFavorites}
        			favorites={favorites}
        			/>		
	})

	return (
		<div className='CardContainer'>
			{ cards }
		</div>
	)
}

CardContainer.propTypes = {
	people: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object
]),
	vehicles: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object
]),
	planets: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object
]),
	addToFavorites: PropTypes.func,
	removeFromFavorites: PropTypes.func,
	favorites: PropTypes.array
}

export default CardContainer;