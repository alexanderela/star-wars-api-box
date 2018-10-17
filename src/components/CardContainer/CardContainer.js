import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({people, vehicles, planets, addToFavorites, removeFromFavorites, favorites}) => {
	// {people.length > 0 && <div/>}
	// {vehicles.length > 0 && <div/>}
	// {planets.length > 0 && <div/>}
	let cards


	if (people) {
		const cards = people.map((person) => {
	// console.log(person)
			return <Card 
								people={people} {...person} 
								person={person}
								key={person.name} 
								addToFavorites={addToFavorites}
          			removeFromFavorites={removeFromFavorites}
          			favorites={favorites}
          			/>
		})
	} else if (vehicles) {
		const cards = vehicles.map((vehicle) => {
			return <Card 
								vehicles={vehicle} {...vehicle} 
								key={vehicle.name} 
								addToFavorites={addToFavorites}
          			removeFromFavorites={removeFromFavorites}
          			favorites={favorites}
								/>
		})
	} else if (planets) {
		const cards = planets.map((planet) => {
			return <Card 
								planets={planet} {...planet} 
								key={planet.name} 
								addToFavorites={addToFavorites}
          			removeFromFavorites={removeFromFavorites}
          			favorites={favorites}
								/>
		})
	}
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
