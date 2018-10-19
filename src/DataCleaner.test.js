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
import fetchData from './apiCalls'

jest.mock('./apiCalls', () => ({
	fetchData: jest.fn().mockImplementation(() => mockDataObj)
}))

describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		it('calls returnMovieInfo with the correct parameters',  async () => {
			//Setup
			const mockRandomEpisode = 5
			const mockMovieDataCollection = await films.results[mockRandomEpisode]
			const returnMovieInfo = await jest.fn().mockImplementation(() => )
			//Execution
			dataCleaner.getMovie()
			// const mockRandomEpisode = 5
			// const mockReturnedMovieData = await films.results[mockRandomEpisode]
			// const returnMovieInfo = jest.fn()
			// const getMovie = jest.fn(() => {
			// 	returnMovieInfo(mockReturnedMovieData);
			// })
			//Execution
			// getMovie()
			//Expectation
			// expect(returnMovieInfo).toHaveBeenCalledWith(mockReturnedMovieData)
		})
	})

	
	describe('returnMovieInfo', () => {
		const mockFilm = {
				opening_crawl: 'opening title',
		 		episode_id: 'episode number',
		 		title: 'title'
		}

		it('returns an object with the correct format', () => {
			expect(typeof dataCleaner.returnMovieInfo(mockFilm)).toBe('object')
		})
	})

	
	describe('getPerson', () => {

		it('calls returnPeopleData with the correct parameters', async () => {
			//Setup
			const mockPeopleData = await people.results
			const returnPeopleData = jest.fn()
			const getPerson = jest.fn(() => {
				returnPeopleData(mockPeopleData)
			})
			//Execution
			getPerson()
			//Expectation
			expect(returnPeopleData).toHaveBeenCalledWith(mockPeopleData)
		})

		it('resolves to expected', async () => {
			//Setup
			const mockReturnedPeopleData = [
				{
					name: 'Luke Skywalker',
					homeWorld: 'Tatooine',
					species: 'human',
					isFavorite: false,
					type: 'people'
				},
				{
					name: 'C-3PO',
					homeWorld: 'Tatooine',
					species: 'droid',
					isFavorite: false,
					type: 'people'
				}
			]
			const expected = [
				{
					name: 'Luke Skywalker', 
					homeWorld: 'Tatooine', 
					species: 'human', 
					isFavorite: false, 
					type: 'people'
				},
				{
					name: 'C-3PO',
					homeWorld: 'Tatooine',
					species: 'droid',
					isFavorite: false,
					type: 'people'
				}
			]
			Promise.all(mockReturnedPeopleData)

			expect(Promise.all(mockReturnedPeopleData)).resolves.toEqual(expected)
		})
	})

	
	describe('returnPeopleData', () => {
		it('should call getHomeWorld', async () => {
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

		it('should call getSpecies', async () => {
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

		it('calls returnPlanetData with the correct parameters', async () => {
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
		it('should call getResidents', async () => {
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
		it('should call getTenants with the correct parameters', async () => {
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
		it('should call fetch for each resident', async () => {
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

		it('should call returnVehicleData with the correct parameters', async () => {
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