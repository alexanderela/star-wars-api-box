import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	romanizeNum = (episodeNum) => {
	  let roman = ''
	  if (episodeNum === 1) {
	    roman = 'I'
	  } else if (episodeNum === 2) {
	    roman = 'II'
	  } else if (episodeNum === 3) {
	    roman = 'III'
	  } else if (episodeNum === 4) {
	    roman = 'IV'
	  } else if (episodeNum === 5) {
	    roman = 'V'
	  } else if (episodeNum === 6) {
	    roman = 'VI'
	  } else if (episodeNum === 7) {
	    roman = 'VII'
	  } else if (episodeNum === 8) {
	    roman = 'VIII'
	  } else if (episodeNum === 9) {
	    roman = 'IX'
	  } else if (episodeNum === 10) {
	    roman = 'X'
	  }

	  return roman
	}

	render() {
		const { films } = this.props

		return (
			<div className="Sidebar fade">
				<div className="star-wars">
					<div className="crawl">
			    
			    <div className="title">
			      <p>Episode {this.romanizeNum(films.episode_id)}</p>
			      <h1>{films.title}</h1>
			    </div>
			    
			    <p>{films.opening_crawl}</p>

			  	</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;