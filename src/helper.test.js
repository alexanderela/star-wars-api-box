import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';
import films from './mockData.js';
import people from './mockData.js';
import planets from './mockData.js';
import resolvedPeople from './mockData.js';
import mockLuke from './mockData.js';


describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/films/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(films)
			}))
			dataCleaner.getMovie()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
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
				json: () => Promise.resolve(people)
			}))
			dataCleaner.getPerson()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('returns the correct value', () => {
			const getPersonReturned = dataCleaner.getPerson()
			expect(getPersonReturned).toEqual(resolvedPeople)
		})
	})

	describe('getHomeWorld', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/"
			const mockPerson = {
				homeWorld: {
					planetName: "Tatooine",
					planetPop: "200000"
				},
				name: "Luke Skywalker",
				species: {
					language: "Galactic Basic",
					speciesName: "Human"
				}
			}
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getHomeWorld(mockPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('returns the correct value', async () => {
			const expected = { planetName: "Tatooine", planetPop: "200000"}
			console.log(mockLuke)
			const returnedHomeWorld = await dataCleaner.getHomeWorld(mockLuke)
			await expect(returnedHomeWorld).toEqual(expected)
		})
	})

	describe('getSpecies', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/species/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(species)
			}))
			dataCleaner.getSpecies()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('returns the correct value', async () => {
			
		})
	})

})