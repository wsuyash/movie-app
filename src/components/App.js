import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { data } from '../data';
import { addMovies } from '../actions';

class App extends React.Component{
	componentDidMount() {

		const { store } = this.props;
		store.subscribe(() => {
			console.log('updated');
			this.forceUpdate();
		});
		// Either make an api call to fetch data or 
		// dispatch action

		store.dispatch(addMovies(data));

		console.log('state', this.props.store.getState());
	}

	render () {
		console.log('render');
		const movies = this.props.store.getState();

	  return (
	    <div className="App">
				<Navbar />
				<div className="main">

					<div className="tabs">
						<div className="tab">Movies</div>
						<div className="tab">Favourites</div>
					</div>

					<div className="list">
						{movies.map((movie, index) => (
							<MovieCard movie={movie} key={`movies-${index}`} />					
						))}
					</div>

				</div>
	    </div>
	  );
	}
}

export default App;
