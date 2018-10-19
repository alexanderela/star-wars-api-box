import React from 'react';
import './FavoriteButton.css';
import PropTypes from 'prop-types';

const FavoriteButton = ({favorites, showFavorites}) => {
	return(
		<div className="FavoriteButton">
	    <button 
	    	className="cat-button favorites-button"
	    	onClick={() => showFavorites()}
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
	favorites: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.number
  ]),
	showFavorites: PropTypes.func
}

export default FavoriteButton;
