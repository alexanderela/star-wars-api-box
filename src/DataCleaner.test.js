import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './DataCleaner.js';
import films from './mockData/mockFilms.js';
import people from './mockData/mockPeople.js';
import planets from './mockData/mockPlanets.js';
import vehicles from './mockData/mockVehicles.js';
import resolvedPeople from './mockData/mockResolvedPeople.js';
import mockPerson from './mockData/mockPerson.js';
import mockSpecies from './mockData/mockSpecies.js';
import mockNewPerson from './mockData/mockNewPerson.js';
import * as fetchData from './apiCalls'

// jest.mock('./apiCalls', () => ({
// 	fetchData: jest.fn().mockImplementation(() => mockDataObj)
// }))
let mockDataCleaner;

describe('DataCleaner', () => {
	beforeEach(() => {
		mockDataCleaner = new DataCleaner()
	})

	describe('getMovie', () => {
		it('calls returnMovieInfo',  async () => {
			const spy = spyOn(mockDataCleaner, 'returnMovieInfo')
			await mockDataCleaner.getMovie()
			expect(spy).toHaveBeenCalled()
		})
	})

	describe('returnMovieInfo', () => {
		const mockFilm = {
				opening_crawl: 'opening title',
		 		episode_id: 'episode number',
		 		title: 'title',
		 		date: '1977'
		}

		it('returns an object with the correct format', () => {
			expect(typeof mockDataCleaner.returnMovieInfo(mockFilm)).toBe('object')
		})
	})

	
	describe('getPerson', () => {
		// xit('calls fetchData with the correct parameters', async () => {
		// 	const mockPeople = [{
  //         name: "Dina Caraballo",
  //         id: "Dina Caraballo",
  //         isFavorite: true, 
  //         type:"people",
  //         properties: [
		// 				{header: 'Homeworld: ', text: "Earth"},
		// 				{header: 'Species: ', text: "human"},
		// 				{header: 'Population: ', text: "7,000,000,000"},
		// 				{header: 'Language: ', text: "Galactic Basic"}
		// 			] 
  //       },
  //       {
  //         name: "Alex Ela",
  //         id: "Alex Ela",
  //         isFavorite: true, 
  //         type:"people",
  //         properties: [
		// 				{header: 'Homeworld: ', text: "Earth"},
		// 				{header: 'Species: ', text: "human"},
		// 				{header: 'Population: ', text: "7,000,000,000"},
		// 				{header: 'Language: ', text: "Galactic Basic"}
		// 			] 
  //       }, 
  //       {
  //         "name": "Luke Skywalker",
  //         "id": "Luke Skywalker",
  //         "isFavorite": true, 
  //         "type":"people",
  //         "properties": [
		// 				{"header": 'Homeworld: ', "text": "Tatooine"},
		// 				{"header": 'Species: ', "text": "human"},
		// 				{"header": 'Population: ', "text": "200,000"},
		// 				{"header": 'Language: ', "text": "Galactic Basic"}
		// 				] 
	 //        }]
		// 	mockDataCleaner.fetchData = await jest.fn().mockImplementation(() => Promise.resolve(mockPeople))
		// 	mockDataCleaner.returnPeopleData(mockPeople) = jest.fn().mockImplementation(() => Promise.resolve(mockPeople))
		// 	await mockDataCleaner.getPerson()
		// 	await expect(mockDataCleaner.fetchData).toHaveBeenCalled()
		// })

		it('calls returnPeopleData with the correct parameters', async () => {
			const mockPeopleData = people.results
			const spy = spyOn(mockDataCleaner, 'returnPeopleData')
			// mockDataCleaner.returnPeopleData = jest.fn()
			// const getPerson = jest.fn(() => {
			// 	return mockPeopleData
			// })
			await mockDataCleaner.getPerson()
			expect(spy).toHaveBeenCalledWith(mockPeopleData)
		})
	})

	
	describe('returnPeopleData', () => {
		xit('should call getHomeWorld', async () => {
			//Setup
			const mockPersonCollection = await people.results
			const getHomeWorld = jest.fn()
			const returnPeopleData = jest.fn((mockPersonCollection) => {
				mockPersonCollection.map(async person => {
					const mockNewPerson = {}
					mockNewPerson.homeWorld = await getHomeWorld(person)
				})
			})
			//Execution
			returnPeopleData(mockPersonCollection)
			//Expectation
			await expect(getHomeWorld).toBeCalled()
		})

		xit('should call getSpecies', async () => {
			//Setup
			const mockPersonCollection = await people.results
			const getSpecies = jest.fn()
			const returnPeopleData = jest.fn((mockPersonCollection) => {
				mockPersonCollection.map(async person => {
					const mockNewPerson = {}
					mockNewPerson.species = await getSpecies(person)
				})
			})
			//Execution
			returnPeopleData(mockPersonCollection)
			//Expectation
			await expect(getSpecies).toBeCalled()
		})
	})

	
	describe('getHomeWorld', () => {

	})

	
	describe('getSpecies', () => {

	})

	describe('getPlanet', () => {

		xit('calls returnPlanetData with the correct parameters', async () => {
			//Setup
			const mockPlanetData = await planets.results
			const returnPlanetData = jest.fn()
			const getPlanet = jest.fn(() => {
				returnPlanetData(mockPlanetData)
			})
			//Execution
			getPlanet()
			//Expectation
			await expect(returnPlanetData).toHaveBeenCalledWith(mockPlanetData)
		})
	})

	describe('returnPlanetData', () => {
		xit('should call getResidents', async () => {
			//Setup
			const planets ={
				results: [
			    {
			      "name": "Alderaan",
			      "residents": [
			          "https://swapi.co/api/people/5/",
			          "https://swapi.co/api/people/68/",
			          "https://swapi.co/api/people/81/"
			      	],
			    },
			    {
			      "name": "Yavin IV",
			      "residents": [],
			    },
			    {
			      "name": "Hoth",
			      "residents": [],
			    }
    		]
    	}
			const mockPlanetCollection = await planets.results
			const getResidents = jest.fn()
			const returnPlanetData = jest.fn((mockPlanetCollection) => {
				mockPlanetCollection.map(async planet => {
					const mockNewPlanet = {}
					mockNewPlanet.residents = await getResidents(planet)
				})
			})
			//Execution
			returnPlanetData(mockPlanetCollection)
			//Expectation
			await expect(getResidents).toBeCalled()
		})
	})

	describe('getResidents', () => {
		xit('should call getTenants with the correct parameters', async () => {
			//Setup
			const residents = [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ]
			const getTenants = jest.fn()
			const getResidents = jest.fn(() => {
				getTenants(residents)
			})
			//Execution
			getResidents()
			//Expectation
			await expect(getTenants).toBeCalled()
		})
	})

	describe('getTenants', () => {
		const residents = [
      "https://swapi.co/api/people/5/",
      "https://swapi.co/api/people/68/",
      "https://swapi.co/api/people/81/"
    ]
		xit('should call fetch for each resident', async () => {
			const getTenants = jest.fn((mockResidentCollection) => {
				mockResidentCollection.map(async resident => {
					window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
						status:200,
						json: () => Promise.resolve(residents)
					}))		
				})
			})
			
			dataCleaner.getTenants(residents)
			await expect(window.fetch).toHaveBeenCalledWith(residents[0])
			await expect(window.fetch).toHaveBeenCalledWith(residents[1])
			await expect(window.fetch).toHaveBeenCalledWith(residents[2])
		})
	})

	describe('getVehicle', () => {

		xit('should call returnVehicleData with the correct parameters', async () => {
			//Setup
			const mockVehicleData = await vehicles.results
			const returnVehicleData = jest.fn()
			const getVehicle = jest.fn(() => {
				returnVehicleData(mockVehicleData)
			})
			//Execution
			getVehicle()
			//Expectation
			expect(returnVehicleData).toHaveBeenCalledWith(mockVehicleData)
		})
	})
})