import React, { Component } from 'react';
import './Sidebar.css';
import Crawl from '../Crawl/Crawl.js';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		return (
			<div className="Sidebar">
				Sidebar
				<Crawl dataCleaner={this.props.dataCleaner}/>
			</div>
		);
	}
}

export default Sidebar;