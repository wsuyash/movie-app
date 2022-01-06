import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
import { connect } from  '../';

class App extends React.Component{
	componentDidMount() {
		this.props.dispatch(addMovies(data));
	}

	isMovieFavourite = (movie) => {
		const { movies } = this.props;

		const index = movies.favourites.indexOf(movie);

		if (index !== -1) {
			// Found the movie
			return true;
		}

		return false;
	}

	onChangeTab = (value) => {
		this.props.dispatch(setShowFavourites(value));
	}

	render () {
		const { movies, search } = this.props;
		const { list, favourites, showFavourites } = movies;

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
								dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
// 	render() {
// 		return (
// 			<StoreContext.Consumer>
// 				{(store) => <App store={store}/>}
// 			</StoreContext.Consumer>
// 		);
// 	}
// }

function mapStateToProps(state) {
	return {
		movies: state.movies,
		search: state.search
	}
}
const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
