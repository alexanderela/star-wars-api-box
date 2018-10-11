import React from 'react';
import './Card.css'

const Card = ({ name, homeWorld, species }) => (
	<div className="Card">
    <h3>{name}</h3>
    <p>{homeWorld.planetName}</p>
    <p>{homeWorld.planetPop}</p>
    <p>{species.speciesName}</p>
    <p>{species.language}</p>
	</div>
)

export default Card;