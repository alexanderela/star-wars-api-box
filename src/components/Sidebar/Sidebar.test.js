import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { shallow } from 'enzyme';

describe('Sidebar', () => {
	let wrapper;
	let roman;

	beforeEach(() => {
		let wrapper = shallow(<SideBar />)
	})
	it('matches the snapshot', () => {
		const wrapper = shallow(<Sidebar />);
		expect(wrapper).toMatchSnapshot();
	})


})