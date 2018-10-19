import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPopup from './ErrorPopup';
import { shallow } from 'enzyme';

describe('ErrorPopup', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<ErrorPopup />)
		expect(wrapper).toMatchSnapshot()
	})
})