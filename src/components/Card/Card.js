import React, {Component} from 'react';
import './Card.css'
import PropTypes from 'prop-types';
import CardHelper from '../CardHelper/CardHelper'

class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: false
		}
	}

	selectCard = (card) => {
		card.isFavorite = !card.isFavorite
		this.setState({ 
			isSelected: !this.state.isSelected
		})
		if (card.isFavorite === true) {
			this.props.addToFavorites(card)
			this.setState({ 
				isSelected: true
			})	
		} else if (card.isFavorite === false) {
			this.props.removeFromFavorites(card.id)
			this.setState({ 
					isSelected: false
				})	
		}
	}

	componentDidMount() {
		if (this.props.favorites){
			this.props.favorites.find((favorite) => {
				if(favorite.id === this.props.id) {
					this.setState({ 
						isSelected: true
					})	 
				}
			})
		}
	}

	setCardProperties = (type) => {
		const cardProperties = type.properties.map(property => {
			return (
				<p key={property[0]} className="card-text">
					<span className="card-header"></span>
					{property}
				</p>
			)
		})
		return cardProperties
	}

	render() {
		const { type, addToFavorites, removeFromFavorites, favorites, isFavorite } = this.props
		const { isSelected } = this.state
		const cardProperties = this.setCardProperties(type)

		return (
			<div className="Card">
		    <div className="fav-btn-card-container">
			    <h3>{type.name}</h3>
			    <button 
			    	className={ `fav-btn people-fav 
			    		${(isSelected) 
			    			? "fav-btn-active" 
			    			: "fav-btn-inactive"}` }
			    	onClick={() => this.selectCard(type)}
			    >
			    	<i className="fas fa-jedi"></i>
			  </button>
		   </div>
		   {cardProperties}
			</div>
		)
	}	
}

Card.propTypes = {
		people: PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object
]),
	vehicles: PropTypes.object,
	planets: PropTypes.object,
	addToFavorites: PropTypes.func,
	removeFromFavorites: PropTypes.func,
	favorites: PropTypes.array
}

export default Card