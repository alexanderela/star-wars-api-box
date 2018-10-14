import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({people, vehicles, planets}) => {

	if (people) {
		const peopleCards = people.map((person) => {
	// console.log(person)
			return <Card people={people} {...person} key={person.name} />
		})

			return (
				<div className='CardContainer'>
					{ peopleCards }
				</div>
			);
	} else if (vehicles) {

		const vehicleCards = vehicles.map((vehicle) => {
			return <Card vehicles={vehicle} key={vehicle.name} />
	})

		return (
			<div className='CardContainer'>
				{ vehicleCards }
			</div>
		);
	} else if (planets) {
		const planetCards = planets.map((planet) => {
			return <Card planets={planet} key={planet.name} />
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
	vehicles: PropTypes.array,
	planets: PropTypes.array
}

export default CardContainer;
