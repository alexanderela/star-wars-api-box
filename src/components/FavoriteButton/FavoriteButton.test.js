/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteButton from './FavoriteButton';
import { shallow, mount } from 'enzyme';

describe('FavoriteButton', () => {
	
	it('matches the snapshot', () => {
		let mockFavoriteCount = []
		let wrapper = shallow(<FavoriteButton favoritesCount={[mockFavoriteCount]}/>);
		expect(wrapper).toMatchSnapshot();
	})

  it('calls the handleFavoritesClick function on click', () => {
    let mockFavsClick = jest.fn()
    let mockFavoritesSelected = true
    let mockFavs = [{
          name: "Dina Caraballo",
          id: "Dina Caraballo",
          isFavorite: true, 
          type:"people",
          properties: [
            {header: 'Homeworld: ', text: "Earth"},
            {header: 'Species: ', text: "human"},
            {header: 'Population: ', text: "7,000,000,000"},
            {header: 'Language: ', text: "Galactic Basic"}
          ] 
        },
        {
          name: "Alex Ela",
          id: "Alex Ela",
          isFavorite: true, 
          type:"people",
          properties: [
            {header: 'Homeworld: ', text: "Earth"},
            {header: 'Species: ', text: "human"},
            {header: 'Population: ', text: "7,000,000,000"},
            {header: 'Language: ', text: "Galactic Basic"}
          ] 
        }, 
        {
          "name": "Luke Skywalker",
          "id": "Luke Skywalker",
          "isFavorite": true, 
          "type":"people",
          "properties": [
            {"header": 'Homeworld: ', "text": "Tatooine"},
            {"header": 'Species: ', "text": "human"},
            {"header": 'Population: ', "text": "200,000"},
            {"header": 'Language: ', "text": "Galactic Basic"}
            ] 
          }]
    let wrapper = shallow(
      <FavoriteButton 
        handleFavoritesClick={mockFavsClick}
        favoritesSelected={mockFavoritesSelected}
        favorites={mockFavs}
      />);
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').hasClass('fav-btn-inactive')).toBe(false)

  })
})
