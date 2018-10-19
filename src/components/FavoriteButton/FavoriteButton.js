import React from 'react';
import './FavoriteButton.css';
import PropTypes from 'prop-types';

const FavoriteButton = ({favorites, checkIfAnyFavorites}) => {
	return(
		<div className="FavoriteButton">
	    <button 
	    	className="cat-button favorites-button"
	    	onClick={() => checkIfAnyFavorites(favorites)}
	    	>
	      Favorites
	      	<span 
	      		className="favorites-count">
	      		{favorites ? favorites.length : 0}
	      	</span>
	    </button>
		</div>
	)
}

FavoriteButton.propTypes = {
	favoritesCount: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.number
  ]),
	checkIfAnyFavorites: PropTypes.func
}

export default FavoriteButton;
