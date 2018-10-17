import React from 'react';
import './FavoriteButton.css';
import PropTypes from 'prop-types';

const FavoriteButton = ({favoritesCount, checkIfAnyFavorites}) => (
	<div className="FavoriteButton">
    <button 
    	className="cat-button favorites-button"
    	onClick={() => checkIfAnyFavorites()}
    	>
      Favorites
      	<span 
      		className="favorites-count">
      		{favoritesCount}
      	</span>
    </button>
	</div>
)

FavoriteButton.propTypes = {
	favoritesCount: PropTypes.array,
	checkIfAnyFavorites: PropTypes.func
}

export default FavoriteButton;
