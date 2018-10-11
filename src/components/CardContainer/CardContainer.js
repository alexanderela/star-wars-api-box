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
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default CardContainer;