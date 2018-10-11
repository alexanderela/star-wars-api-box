import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		const { films } = this.props

		return (
			<div className="Sidebar fade">
				Sidebar
				
				<div className="star-wars">
					<div class="crawl">
			    
			    <div class="title">
			      <p>{films.episode_id}</p>
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