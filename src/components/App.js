import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
import { StoreContext } from  '../';

class App extends React.Component{
	componentDidMount() {
		const { store } = this.props;

		store.subscribe(() => {
			this.forceUpdate();
		});

		store.dispatch(addMovies(data));
	}

	isMovieFavourite = (movie) => {
		const { movies } = this.props.store.getState();

		const index = movies.favourites.indexOf(movie);

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
		const { movies, search } = this.props.store.getState();
		const { list, favourites, showFavourites } = movies;

		console.log('render', this.props.store.getState());

		const displayMovies = showFavourites ? favourites : list;

	  return (
	    <div className="App">
				<Navbar search={search}/>
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

class AppWrapper extends React.Component {
	render() {
		return (
			<StoreContext.Consumer>
				{(store) => <App store={store}/>}
			</StoreContext.Consumer>
		);
	}
}

export default AppWrapper;
