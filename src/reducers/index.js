import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initialMoviesState = {
	list: [],
	favourites: [],
}

export default function movies(state = initialMoviesState, action) {
	// if (action.type === ADD_MOVIES) {
	// 	return {
	// 		...state,
	// 		list: action.movies,
	// 	}
	// }

	// return state;

	// React community prefers to use switch statements instead of if-else so rewriting above code in switch

	switch (action.type) {
		case ADD_MOVIES:
			return {
				...state,
				list: action.movies,
			}

		case ADD_FAVOURITE:
			return {
				...state,
				favourites: [action.movie, ...state.favourites],
			}

		default:
			return state;
	}
}
