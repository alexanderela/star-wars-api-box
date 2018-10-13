import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({people}) => {
	// debugger
// if (props.people) {
// 	console.log(props.newProps)
// 		return (
// 		<div className='CardContainer'>
// 			Hi
// 		</div>
// 	);
// } else {
	console.log(people)
	const peopleCards = people.map((person) => {
		// console.log({...person})
		return <Card {...person} key={person.name}/>
	})
		return (
			<div className='CardContainer'>
				{ peopleCards }
			</div>
		);
}



// }

export default CardContainer;



// class CardContainer extends Component {
// 	constructor({props}) {
// 		super(props);
// 		this.state = {

// 		}


// 	}

// 	const peopleCards = this.props.people.map((person) => {
// 		return <Card {...person}/>
// 	})

// 	const peopleCards = this.props.people.map((person) => {
// 		return <Card {...person}/>
// 	})

// 	render() {
// 		return (
// 			<div className='CardContainer'>
// 				<div className="button-container">
// 					<button className="cat-button people-button">People</button>
// 					<button className="cat-button planets-button">Planets</button>
// 					<button className="cat-button vehicles-button">Vehicles</button>
// 				</div>
// 				{ peopleCards }

// 			</div>
// 		);
// 	}
// }

// export default CardContainer;