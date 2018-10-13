import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({people}) => {
	console.log(people)
	const peopleCards = people.map((person) => {
		return <Card {...person} key={person.name}/>
	})
		return (
			<div className='CardContainer'>
				{ peopleCards }
			</div>
		);
}


export default CardContainer;
