import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from './helper.js';

describe('DataCleaner', () => {
	const dataCleaner = new DataCleaner()

	describe('getMovie', () => {
		it('calls fetch with the correct parameters', async () => {

		})

		it('calls returnMovieInfo with the correct parameters', () => {

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
})