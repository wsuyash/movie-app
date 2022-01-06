// action types:
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

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

export function handleMovieSearch(movie) {
	const url = `http://www.omdbapi.com/?apikey=bd2e447b&t=${movie}`;

	return function(dispatch) {
		fetch(url)
		.then(response => response.json())
		.then(movie => {
			console.log('movie', movie);
		});
	};
}