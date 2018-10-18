import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({entries, toggleFavorites, favorites}) => {
	// console.log(entries)
  let cards

	cards = entries.map(entry => {
		// console.log(entry)
    return <Card 
							entry={entry}
							key={entry.name} 
							toggleFavorites={toggleFavorites}
        			favorites={favorites}
        			isFavorite={entry.isFavorite}
        			/>		
	})

	return (
		<div className='CardContainer'>
			{ cards }
		</div>
	)
}

CardContainer.propTypes = {
  entries: PropTypes.array,
	toggleFavorites: PropTypes.func,
	favorites: PropTypes.array
}

export default CardContainer;