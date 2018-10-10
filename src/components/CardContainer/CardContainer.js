import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className='CardContainer'>
				<div className="button-container">
					<button className="cat-button people-button">People</button>
					<button className="cat-button planets-button">Planets</button>
					<button className="cat-button vehicles-button">Vehicles</button>
				</div>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default CardContainer;