import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './FavoriteButton.css';
import PropTypes from 'prop-types';

const FavoriteButton = ({ favorites, showFavorites }) => (
  <div className="FavoriteButton">
    <button
      className="cat-button favorites-button"
      onClick={() => showFavorites()}
    >
      <NavLink to="/favorites" className="nav">Favorites</NavLink>
      <span
        className="favorites-count"
      >
        {favorites ? favorites.length : 0}
      </span>
    </button>
  </div>
);

FavoriteButton.propTypes = {
  favorites: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
  ]),
  showFavorites: PropTypes.func,
};

export default FavoriteButton;
