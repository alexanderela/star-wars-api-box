import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({people, vehicles}) => {
	console.log(vehicles)
	if (people) {
		const peopleCards = people.map((person) => {
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
	}
}


export default CardContainer;
