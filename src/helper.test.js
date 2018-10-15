import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';
import films from './mockData/mockFilms.js';
import people from './mockData/mockPeople.js';
import planets from './mockData/mockPlanets.js';
import vehicles from './mockData/mockVehicles.js';
import resolvedPeople from './mockData/mockResolvedPeople.js';
import mockPerson from './mockData/mockPerson.js';
import mockSpecies from './mockData/mockSpecies.js';
import mockNewPerson from './mockData/mockNewPerson.js';

describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		it('calls fetch with the correct parameters', async () => {
			//Setup
			const expected = "https://swapi.co/api/films/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
			}))
			//Execution
			dataCleaner.getMovie()
			//Expectation
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if fetch fails', () => {
			//Setup & Execution
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(people)
			}))
			//Expectation
			expect(dataCleaner.getMovie()).rejects.toEqual(expected)
		})

		it('calls returnMovieInfo with the correct parameters',  async () => {
			//Setup
			const mockRandomEpisode = 5
			const mockReturnedMovieData = await films.results[mockRandomEpisode]
			const returnMovieInfo = jest.fn()
			const getMovie = jest.fn(() => {
				returnMovieInfo(mockReturnedMovieData);
			})
			//Execution
			getMovie()
			//Expectation
			expect(returnMovieInfo).toHaveBeenCalledWith(mockReturnedMovieData)
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
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/people/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
			}))
			dataCleaner.getPerson()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(people)
			}))
			await expect(dataCleaner.getPerson()).rejects.toEqual(expected)
		})

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
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(mockNewPerson)
			}))
			await dataCleaner.getHomeWorld(mockNewPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if the fetch call fails', () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(planets)
			}))
			 expect(dataCleaner.getHomeWorld(mockNewPerson)).rejects.toEqual(expected)
		})
	})

	
	describe('getSpecies', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/species/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(mockNewPerson)
			}))
			dataCleaner.getSpecies(mockNewPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(mockNewPerson)
			}))
			await expect(dataCleaner.getSpecies(mockNewPerson)).rejects.toEqual(expected)
		})
	})

	describe('getPlanet', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getPlanet()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(planets)
			}))
			await expect(dataCleaner.getPlanet()).rejects.toEqual(expected)
		})

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
		it('should call fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/vehicles/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(vehicles)
			}))
			dataCleaner.getVehicle()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(vehicles)
			}))
			await expect(dataCleaner.getPlanet()).rejects.toEqual(expected)
		})

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