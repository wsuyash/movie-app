import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component{
	componentDidMount() {
		const { store } = this.props;

		store.subscribe(() => {
			// console.log('updated');
			this.forceUpdate();
		});

		// Either make an api call to fetch data or 
		// dispatch action

		store.dispatch(addMovies(data));
	}

	isMovieFavourite = (movie) => {
		const { favourites } = this.props.store.getState();

		const index = favourites.indexOf(movie);

		if (index !== -1) {
			// Found the movie
			return true;
		}

		return false;
	}

	onChangeTab = (value) => {
		this.props.store.dispatch(setShowFavourites(value));
	}

	render () {
		const { list, favourites, showFavourites } = this.props.store.getState();

		console.log('render', this.props.store.getState());

		const displayMovies = showFavourites ? favourites : list;

	  return (
	    <div className="App">
				<Navbar />
				<div className="main">

					<div className="tabs">
						<div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)} >Movies</div>
						<div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)} >Favourites</div>
					</div>

					<div className="list">
						{displayMovies.map((movie, index) => (
							<MovieCard
								movie={movie}
								key={`movies-${index}`}
								dispatch={this.props.store.dispatch}
								isFavourite={this.isMovieFavourite(movie)}
							/>					
						))}
					</div>

					{displayMovies.length === 0 ? (
						<div className='no-movies'>No movies to show.</div>
					) : (null)}

				</div>
	    </div>
	  );
	}
}

export default App;
