/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import DataCleaner from '../../DataCleaner.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Nav from '../Nav/Nav.js';
import films from '../../mockData/mockFilms.js';
import people from '../../mockData/mockPeople.js';
import vehicles from '../../mockData/mockVehicles.js';
import planets from '../../mockData/mockPlanets.js';
import resolvedPeople from '../../mockData/mockResolvedPeople.js';
import mockPerson from '../../mockData/mockPerson.js';
import mockSpecies from '../../mockData/mockSpecies.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  	<App />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});

let wrapper;
let mockEvent;
let mockLuke;
let mockVehicle;
let mockPlanet;
let mockFilm;
let expected;
let mockEntry;
let	mockFavs = [{
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

beforeEach(() => {
	wrapper = shallow(<App />);	
	mockEvent = { target: true }
})

afterEach(() => {
	localStorage.clear()
})

describe('App component', () => {
	it('matches the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('has the correct default state for all categories', () => {
		expect(wrapper.state().films).not.toBe('{}')
		expect(wrapper.state().people).toEqual([])
		expect(wrapper.state().vehicles).toEqual([])
		expect(wrapper.state().planets).toEqual([])
		expect(wrapper.state().favorites).toEqual([])
	})

	it('passes the correct favoritesCount props to Nav', () => {
		wrapper.setState({ favorites: [{name: 'alvin', type: 'chipmunk'}] })
		const navComponent = wrapper.find(Nav)
		expect(navComponent.props().favorites.length).toEqual(1)
	})

	it('passes favoritesCount props to Nav if they exist in state', () => {
		const mockVehicles = [{"make": "mustang"}, {"make": "camaro"}]
		wrapper.setState({ favorites: mockVehicles })
		const navComponent = wrapper.find(Nav)
		expect(navComponent.props().favorites.length).toEqual(2)
	})

	describe('componentDidMount', () => {
		it('invokes getFilm function on componentDidMount', () => {
			wrapper.instance().getFilm = jest.fn()
			wrapper.instance().componentDidMount()
			expect(wrapper.instance().getFilm).toHaveBeenCalled()
		})
	})

	describe('toggleFavorites', () => {
		it('adds cards to favorites if not already contained in the favorites array', () => {
			mockEntry = {
		        "name": "Sand Cralwer",
		        "id": "Sand Cralwer",
		        "isFavorite": false, 
		        "type":"vehicles",
		        "properties": [
							{"header": 'Model: ', "text": "Digger Crawler"},
							{"header": 'Class: ', "text": "wheeled"},
							{"header": 'Passengers: ', "text": "1"}
						] 
		      }
			wrapper.setState({ favorites: []})
			wrapper.instance().toggleFavorites(mockEntry)
			expect(wrapper.state().favorites).toEqual([mockEntry])
		})

		it('removes cards from favorites if they are already in favorites array', () => {
			expected = [{
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
        }]
			mockEntry =	{
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
        }
			wrapper.setState({ favorites: mockFavs })
			wrapper.instance().toggleFavorites(mockEntry)
			expect(wrapper.state().favorites).toEqual(expected)
		})
	})
	// describe('toggleFavorites', () => {
	// 	it('adds cards to favorites if not already contained in the favorites array', () => {
	// 		const card = { "name": "Luke Skywalker", "species": "human" }
	// 		const expected = [card]
	// 		wrapper.instance().addToFavorites(card)
	// 		expect(wrapper.state().favorites).toEqual(expected)
	// 	})
	
		// it('removes cards from favorites array', () => {
		// 	expected = []
		// 	const mockId = "Luke"
		// 	const mockCard = [{ "name": "Luke", "id": "Luke" }]
		// 	wrapper.setState({ favorites: mockCard })
		// 	wrapper.instance().removeFromFavorites(mockId)
		// 	expect(wrapper.state().favorites).toEqual(expected)
		// })


	describe('isInFavorites', () => {
		it('should find a match for the given entry', () => {
			mockEntry =	{
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
        }

      wrapper.setState({ favorites: mockFavs })
			expect(wrapper.instance().isInFavorites(mockEntry)).toEqual(mockEntry)
		})
	})

	describe('toggleErrorPopup', () => {
		it('should reverse the state of showError popup', () => {
			wrapper.instance().toggleErrorPopup()
			expect(wrapper.state().showErrorPopup).toBe(true)
		})
	})

	describe('showFavorites', () => {
		it('if there are favorites it should change favoritesSelected to true', () => {
			wrapper.setState({ favorites: mockFavs })
			wrapper.instance().showFavorites()
			expect(wrapper.state().favoritesSelected).toBe(true)
		})

		it('if there are no favorites it should call toggleErrorPopup', () => {
			const spy = spyOn(wrapper.instance(), 'toggleErrorPopup')
			wrapper.setState({ favorites: [] })
			wrapper.instance().showFavorites()
			expect(spy).toHaveBeenCalled()
		})
	})

	describe('getFilm', () => {
		beforeEach(() => {
			const mockDataCleaner = new DataCleaner
			wrapper.setState({ dataCleaner: mockDataCleaner})
		})

		it('should call getMovie', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getMovie')
			await wrapper.instance().getFilm()
			await expect(spy).toHaveBeenCalled()
		})

		it('should setState', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getMovie')
			expected = await wrapper.state().dataCleaner.getMovie()
			await wrapper.instance().getFilm()
			await expect(wrapper.state().films).toEqual(expected)
		})
	})

	describe('getPeople', () => {
		beforeEach(() => {
			const mockDataCleaner = new DataCleaner
			wrapper.setState({ dataCleaner: mockDataCleaner})
		})

		it('should call getPerson', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getPerson')
			await wrapper.instance().getPeople()
			await expect(spy).toHaveBeenCalled()
		})

		it('should setState', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getPerson')
			expected = await wrapper.state().dataCleaner.getPerson()
			await wrapper.instance().getPeople()
			await expect(wrapper.state().people).toEqual(expected)
		})
	})

	describe('getPlanets', () => {
		beforeEach(() => {
			const mockDataCleaner = new DataCleaner
			wrapper.setState({ dataCleaner: mockDataCleaner})
		})

		it('should call getPlanet', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getPlanet')
			await wrapper.instance().getPlanets()
			await expect(spy).toHaveBeenCalled()
		})

		it('should setState', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getPlanet')
			expected = await wrapper.state().dataCleaner.getPlanet()
			await wrapper.instance().getPlanets()
			await expect(wrapper.state().planets).toEqual(expected)
		})
	})

	describe('getVehicles', () => {
		beforeEach(() => {
			const mockDataCleaner = new DataCleaner
			wrapper.setState({ dataCleaner: mockDataCleaner})
		})

		it('should call getVehicle', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getVehicle')
			await wrapper.instance().getVehicles()
			await expect(spy).toHaveBeenCalled()
		})

		it('should setState', async () => {
			const spy = spyOn(wrapper.state().dataCleaner, 'getVehicle')
			expected = await wrapper.state().dataCleaner.getVehicle()
			await wrapper.instance().getVehicles()
			await expect(wrapper.state().vehicles).toEqual(expected)
		})
	})

	// describe('showFilm', () => {
	// 	it('sets film to state', async () => {
	// 		mockFilm = {
	// 			opening_crawl: "Heyy youu guyyyys", 
	// 			episode_id: 7, 
	// 			title: "The Force Awakens"
	// 		}
	// 		wrapper.state().dataCleaner.getMovie = jest.fn().mockImplementation(() => Promise.resolve(
	// 			mockFilm))
	// 		await wrapper.instance().showFilm()
	// 		await expect(wrapper.state().films).toEqual(mockFilm)
	// 	})
	// })

	// describe('toggleCategoryState', () => {
	// 	xit('selects people in state when toggleCategory is called', () => {
	// 		const category = 'people'
	// 		wrapper.setState({ peopleSelected: false })
	// 		wrapper.instance().toggleCategoryState(category)
	// 		expect(wrapper.state().peopleSelected).toEqual(true)
	// 	})

	// 	xit('invokes showPeople when toggleCategory is called', () => {
	// 		const instance = wrapper.instance()
	// 		const category = 'people'
	// 		const spy = jest.spyOn(instance, 'showPeople')
	// 		wrapper.instance().toggleCategoryState(category)
	// 		expect(spy).toHaveBeenCalled()
	// 	})

	// 	xit('selects vehicles in state when toggleCategory is called', () => {
	// 		const category = 'vehicles'
	// 		wrapper.setState({ vehiclesSelected: false })
	// 		wrapper.instance().toggleCategoryState(category)
	// 		expect(wrapper.state().vehiclesSelected).toEqual(true)
	// 	})

	// 	xit('invokes showVehicles when toggleCategory is called', () => {
	// 		const instance = wrapper.instance()
	// 		const category = 'vehicles'
	// 		const spy = jest.spyOn(instance, 'showVehicles')
	// 		wrapper.instance().toggleCategoryState(category)
	// 		expect(spy).toHaveBeenCalled()
	// 	})

	// 	xit('selects planets in state when toggleCategory is called', () => {
	// 		const category = 'planets'
	// 		wrapper.setState({ planetsSelected: false })
	// 		wrapper.instance().toggleCategoryState(category)
	// 		expect(wrapper.state().planetsSelected).toEqual(true)
	// 	})

	// 	xit('invokes showPlanets when toggleCategory is called', () => {
	// 		const instance = wrapper.instance()
	// 		const category = 'planets'
	// 		const spy = jest.spyOn(instance, 'showPlanets')
	// 		wrapper.instance().toggleCategoryState(category)
	// 		expect(spy).toHaveBeenCalled()
	// 	})
	// })

	describe('setLocalStorage', () => {
		it('sets people data to local storage', () => {
			const mockData = [{ "class": "wheeled", "model": "Digger Crawler" }, 
			{"class": "tires", "model": "Mustang"}]
			wrapper.instance().setLocalStorage('mockData', mockData)
			expect(JSON.parse(localStorage.getItem('mockData'))).toEqual(mockData)
			localStorage.clear()
		})
	})

	describe('getLocalStorage', () => {
		it('gets and parses data from local storage', () => {
			localStorage.clear()
			const mockData = [{ "class": "wheeled", "model": "Digger Crawler" }, 
			{"class": "tires", "model": "Mustang"}]
			localStorage.setItem('mockData', JSON.stringify(mockData))
			const	getStorage = wrapper.instance().getLocalStorage('mockData')
			expect(getStorage).toEqual(mockData) 
			localStorage.clear()
		})
	})

	describe('showPeople', () => {
		// it('should toggle the state of people if it is already selected', () => {
		// 	mockFilm = {
		// 		opening_crawl: "Heyy youu guyyyys", 
		// 		episode_id: 7, 
		// 		title: "The Force Awakens"
		// 	}
		// 	wrapper.setState({ peopleSelected: true, films: mockFilm })
		// 	wrapper.instance().showPeople()
		// 	expect(wrapper.state().peopleSelected).toBe(false)
		// })

		it('sets people to state ', async () => {
			mockLuke = {
        "name": "Luke Skywalker",
        "id": "Luke Skywalker",
        "isFavorite": false, 
        "type":"people",
        "properties": [
					{"header": 'Homeworld: ', "text": "Tatooine"},
					{"header": 'Species: ', "text": "human"},
					{"header": 'Population: ', "text": "200,000"},
					{"header": 'Language: ', "text": "Galactic Basic"}
				] 
      }
			wrapper.state().dataCleaner.getPerson = jest.fn().mockImplementation(() => Promise.resolve(
		 		mockLuke))
			await wrapper.instance().showPeople()
		  await expect(wrapper.state().people).toEqual(mockLuke)
		})
		
		it('calls getVehicles if there are no vehicles in local storage', async () => {
			const spy = spyOn(wrapper.instance(), 'showVehicles')
			localStorage.clear()
			wrapper.instance().showVehicles()
			expect(spy).toHaveBeenCalled()
		})

		it('retrieves vehicles from local storage if there are vehicles in local storage', async () => {
			localStorage.setItem('vehicles', JSON.stringify(mockFavs))
			const spy = spyOn(wrapper.instance(), 'getLocalStorage')	
			wrapper.instance().showVehicles()	
			expect(spy).toHaveBeenCalled()				
		})
		// it('renders a card container displaying people if peopleSelected is true', () => {
		// 	// wrapper.setState({ peopleSelected: true })
		//   // const spy = spyOn(wrapper.instance(), 'showPeople');
		//   wrapper.instance().showPeople()
		// 	// expect(spy).toHaveBeenCalled()
		// })
	})

	// describe('checkLocalStoragePeople', () => {
	// 	it('gets people data from local storage if it already exists there', () => {
	// 		const mockPeople = [{ "name": "Luke", "species": "human" }]
	// 		wrapper.instance().setLocalStorage('people', mockPeople)	
	// 		wrapper.instance().checkLocalStoragePeople(mockPeople)
	// 		expect(wrapper.state().people).toEqual(mockPeople)
	// 		localStorage.clear()
	// 	})
	// })

	describe('showVehicles', () => {
		// xit('should toggle the state of vehicles if it is already selected', async () => {
		// 	mockFilm = {
		// 		opening_crawl: "Heyy youu guyyyys", 
		// 		episode_id: 7, 
		// 		title: "The Force Awakens"
		// 	}
		// 	wrapper.setState({ vehiclesSelected: true, films: mockFilm })
		// 	await wrapper.instance().showVehicles()
		// 	await expect(wrapper.state().vehiclesSelected).toBe(false)
		// })

		beforeEach(() => {
			mockVehicle = {
          "name": "Sand Cralwer",
          "id": "Sand Cralwer",
          "isFavorite": false, 
          "type":"vehicles",
          "properties": [
						{"header": 'Model: ', "text": "Digger Crawler"},
						{"header": 'Class: ', "text": "wheeled"},
						{"header": 'Passengers: ', "text": "1"}
					] 
        }
		})
		it('sets vehicles to state ', async () => {
			wrapper.state().dataCleaner.getVehicle = jest.fn().mockImplementation(() => Promise.resolve(
		 		mockVehicle))
			await wrapper.instance().showVehicles()
		  await expect(wrapper.state().vehicles).toEqual(mockVehicle)
		})

		it('calls getPeople if there are no people in local storage', async () => {
			const spy = spyOn(wrapper.instance(), 'showPeople')
			localStorage.clear()
			wrapper.instance().showPeople()
			expect(spy).toHaveBeenCalled()
		})

		it('retrieves people from local storage if there are people in local storage', async () => {
			localStorage.setItem('people', JSON.stringify(mockVehicle))
			const spy = spyOn(wrapper.instance(), 'getLocalStorage')	
			wrapper.instance().showPeople()	
			expect(spy).toHaveBeenCalled()				
		})
		// xit('renders a card container displaying vehicles if vehiclesSelected is true', () => {
		// 	wrapper.setState({ vehiclesSelected: true })
		// 	const spy = spyOn(wrapper.instance(), 'showVehicles');
		// 	wrapper.instance().showVehicles()
		// 	expect(spy).toHaveBeenCalled()
		// })
	})

	// describe('checkLocalStorageVehicles', () => {
	// 	it('gets vehicle data from local storage if it already exists there', () => {
	// 		mockVehicle = [{
	// 			"class": "wheeled", 
	// 			"model": "Digger Crawler",
	// 			"name": "Sand Crawler", 
	// 			"passengers": "30"
	// 		}]
	// 		wrapper.instance().setLocalStorage('vehicles', mockVehicle)	
	// 		wrapper.instance().checkLocalStorageVehicles(mockVehicle)
	// 		expect(wrapper.state().vehicles).toEqual(mockVehicle)
	// 		localStorage.clear()
	// 	})
	// })

	describe('showPlanets', () => {
		// xit('should toggle the state of planets if it is already selected', async () => {
		// 	mockFilm = {
		// 		opening_crawl: "Heyy youu guyyyys", 
		// 		episode_id: 7, 
		// 		title: "The Force Awakens"
		// 	}
		// 	wrapper.setState({ planetsSelected: true, films: mockFilm })
		// 	await wrapper.instance().showPlanets()
		// 	await expect(wrapper.state().planetsSelected).toBe(false)
		// })

		it('sets planets to state ', async () => {
			mockPlanet = {"name": "Alderaan", 
				"terrain": "grasslands, mountains", 
				"population": "2000000000", "climate": "temperate", 
			"residents": 
				["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}
			wrapper.state().dataCleaner.getPlanet = jest.fn().mockImplementation(() => Promise.resolve(
		 		mockPlanet))
			await wrapper.instance().showPlanets()
		  await expect(wrapper.state().planets).toEqual(mockPlanet)	
		})

		it('calls getPlanets if there are no planets in local storage', async () => {
			const spy = spyOn(wrapper.instance(), 'showPlanets')
			localStorage.clear()
			wrapper.instance().showPlanets()
			expect(spy).toHaveBeenCalled()
		})

		it('retrieves planets from local storage if there are planets in local storage', async () => {
			localStorage.setItem('planets', JSON.stringify(mockVehicle))
			const spy = spyOn(wrapper.instance(), 'getLocalStorage')	
			wrapper.instance().showPlanets()	
			expect(spy).toHaveBeenCalled()				
		})
		// xit('renders a card container displaying planets if planetsSelected is true', () => {
		// 	wrapper.setState({ planetsSelected: true })
		// 	const spy = spyOn(wrapper.instance(), 'showPlanets');
		// 	wrapper.instance().showPlanets()
		// 	expect(spy).toHaveBeenCalled()	
		// })
	})

	// describe('checkLocalStoragePlanets', () => {
	// 	it('gets planet data from local storage if it already exists there', () => {
	// 		mockPlanet = [{"name": "Alderaan", 
	// 			"terrain": "grasslands, mountains", 
	// 			"population": "2000000000", "climate": "temperate", 
	// 		"residents": 
	// 			["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]}]
	// 		wrapper.instance().setLocalStorage('planets', mockPlanet)	
	// 		wrapper.instance().checkLocalStoragePlanets(mockPlanet)
	// 		expect(wrapper.state().planets).toEqual(mockPlanet)
	// 		localStorage.clear()
	// 	})
	// })
})