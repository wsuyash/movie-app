import { getValue } from "@testing-library/user-event/dist/utils";
import { ADD_MOVIES, REMOVE_FROM_FAVOURITES, ADD_TO_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
	list: [],
	favourites: [],
	showFavourites: false,
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

		case ADD_TO_FAVOURITES:
			return {
				...state,
				favourites: [action.movie, ...state.favourites],
			}

		case REMOVE_FROM_FAVOURITES:
			const filteredArray = state.favourites.filter(
				movie => movie.Title !== action.movie.Title
			);
			return {
				...state,
				favourites: filteredArray,
			}

		case SET_SHOW_FAVOURITES:
			return {
				...state,
				showFavourites: action.value,
			}

		default:
			return state;
	}
}
