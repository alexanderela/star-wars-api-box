import React from 'react';
import './Card.css'

const Card = ({ name, homeWorld, species }) => (
	<div className="Card">
    <div className="fav-btn-card-container">
	    <h3>{name}</h3>
	    <button 
	    	className="fav-btn"
	    >
	    	<i class="fas fa-jedi"></i>
	    </button>
    </div>
    <p>Species: {species.speciesName}</p>
    <p>Language: {species.language}</p>
    <p>Homeworld: {homeWorld.planetName}</p>
    <p>Population: {homeWorld.planetPop}</p>
	</div>
)

export default Card;