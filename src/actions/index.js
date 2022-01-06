// action types:
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

// functions like the one below are called Action Creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(value) {
  return {
    type: SET_SHOW_FAVOURITES,
		value,
  };
}

export function addMovieToList(movie) {
	return {
		type: ADD_MOVIE_TO_LIST,
		movie
	}
}

export function handleMovieSearch(searchText) {
	const url = `http://www.omdbapi.com/?apikey=bd2e447b&t=${searchText}`;

	return function(dispatch) {
		fetch(url)
		.then(response => response.json())
		.then(movie => {
			console.log('movie', movie);

			dispatch(addMovieSearchResult(movie));
		});
	};
}

export function addMovieSearchResult(movie) {
	return {
		type: ADD_SEARCH_RESULT,
		movie
	}
}