import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';
import films from './mockData/mockFilms.js';
import people from './mockData/mockPeople.js';
import planets from './mockData/mockPlanets.js';
import resolvedPeople from './mockData/mockResolvedPeople.js';
import mockPerson from './mockData/mockPerson.js';
import mockSpecies from './mockData/mockSpecies.js';



describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/films/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
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

		xit('returns an object with the correct format', () => {
			expect(typeof dataCleaner.returnMovieInfo(mockFilm)).toBe('object')
		})
	})

	describe('getPerson', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/people/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve()
			}))
			dataCleaner.getPerson()
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		xit('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(people)
			}))
			await expect(dataCleaner.getPerson()).rejects.toEqual(expected)
		})
	})

	describe('getHomeWorld', () => {
		xit('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/planets/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getHomeWorld(mockPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		xit('throws an error if the fetch call fails', () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(planets)
			}))
			 expect(dataCleaner.getHomeWorld(mockPerson)).rejects.toEqual(expected)
		})

		xit('is called within getPerson()', async () => {
			const expected = "https://swapi.co/api/planets/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 200,
				json: () => Promise.resolve(planets)
			}))
			dataCleaner.getPerson()
			dataCleaner.getHomeWorld = jest.fn()

			expect(dataCleaner.getHomeWorld).toHaveBeenCalled()
		})
	})

	describe('getSpecies', () => {
		it('calls fetch with the correct parameters', async () => {
			const expected = "https://swapi.co/api/species/1/"
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status:200,
				json: () => Promise.resolve(species)
			}))
			dataCleaner.getSpecies(mockPerson)
			await expect(window.fetch).toHaveBeenCalledWith(expected)
		})

		it('throws an error if the fetch call fails', async () => {
			const expected = Error('Fetch has failed')
			window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
				status: 500,
				json: () => Promise.resolve(species)
			}))
			await expect(dataCleaner.getSpecies(mockPerson)).rejects.toEqual(expected)
		})
	})
})