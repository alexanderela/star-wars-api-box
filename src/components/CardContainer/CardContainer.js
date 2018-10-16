import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({people, vehicles, planets, addToFavorites, removeFromFavorites}) => {

	if (people) {
		const peopleCards = people.map((person) => {
	// console.log(person)
			return <Card 
								people={people} {...person} 
								key={person.name} 
								addToFavorites={addToFavorites}
          			removeFromFavorites={removeFromFavorites}
          			/>
		})

			return (
				<div className='CardContainer'>
					{ peopleCards }
				</div>
			);
	} else if (vehicles) {

		const vehicleCards = vehicles.map((vehicle) => {
			return <Card 
								vehicles={vehicle} {...vehicle} 
								key={vehicle.name} 
								addToFavorites={addToFavorites}
          			removeFromFavorites={removeFromFavorites}
								/>
	})

		return (
			<div className='CardContainer'>
				{ vehicleCards }
			</div>
		);
	} else if (planets) {
		const planetCards = planets.map((planet) => {
			return <Card 
								planets={planet} {...planet} 
								key={planet.name} 
								addToFavorites={addToFavorites}
          			removeFromFavorites={removeFromFavorites}
								/>
	})

		return (
			<div className='CardContainer'>
				{ planetCards }
			</div>
		);
	}
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
	removeFromFavorites: PropTypes.func
}

export default CardContainer;
