import React, { Component } from 'react';
import './Sidebar.css';
// import Crawl from '../Crawl/Crawl.js';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		return (
			<div className="Sidebar fade">
				Sidebar
				<div className="star-wars">
					<div class="crawl">
			    
			    <div class="title">
			      <p>{this.props.films.episode_id}</p>
			      <h1>{this.props.films.title}</h1>
			    </div>
			    
			    <p>{this.props.films.opening_crawl}</p>

			  	</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;