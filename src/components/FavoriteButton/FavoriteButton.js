import React from 'react';
import './FavoriteButton.css';

const FavoriteButton = ({favoritesCount}) => (
	<div className="FavoriteButton">
	{console.log(favoritesCount)}
    <button className="cat-button favorites-button">
      Favorites
      	<span 
      		className="favorites-count">{!favoritesCount ? 0 : favoritesCount}
      	</span>
    </button>
	</div>
)

export default FavoriteButton;