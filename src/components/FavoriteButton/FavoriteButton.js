import React from 'react';
import './FavoriteButton.css';

const FavoriteButton = ({favoritesCount}) => (
	<div className="FavoriteButton">
    <button className="cat-button favorites-button">
      Favorites
      	<span 
      		className="favorites-count">
      		{favoritesCount}
      	</span>
    </button>
	</div>
)

export default FavoriteButton;
