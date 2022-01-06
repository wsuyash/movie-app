// action types:
export const ADD_MOVIES = 'ADD_MOVIES';

// functions like the one below are called Action Creators
export function addMovies(movies) {
	return {
		type: ADD_MOVIES,
		movies
	}
}