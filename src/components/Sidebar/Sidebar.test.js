import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { shallow } from 'enzyme';

describe('Sidebar', () => {
	let wrapper;

	beforeEach(() => {
		const mockFilm = {"opening_crawl": "Oh hayyyyy...", "episode_id": 3, 
		"title": "Revenge of the Sith"}
		wrapper = shallow(<Sidebar films={mockFilm}/>);

	})
	
	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	// it('converts numbers to roman numerals', () => {
	

	// })

	// it('displays a scrolling title page', () => {

	// })

})