import React from 'react';

const CardHelper = ({ type, addToFavorites, removeFromFavorites, favorites, isSelected}) => {
    const { properties } = type
    const cardProperties = properties.map(property => {
        return <p className="card-text"><span className="card-header"></span>{property}</p>
    })

    return (
  		<div className="Card">
		    <div className="fav-btn-card-container">
			    <h3>{type.name}</h3>
			    <button 
			    	className={ `fav-btn people-fav 
			    		${(isSelected) 
			    			? "fav-btn-active" 
			    			: "fav-btn-inactive"}` }
			    	onClick={() => this.selectCard()}
			    >
			    	<i className="fas fa-jedi"></i>
			  </button>
		   </div>
		  </div>
		)

  }

export default CardHelper