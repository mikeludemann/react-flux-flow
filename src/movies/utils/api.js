import Actions from '../actions/Actions';
import * as $ from 'jquery';

class API {

	searchMovies(movie) {
		$.ajax({
			url: 'https://omdbapi.com/?apikey=3bc3d08&s=' + movie.title,
			dataType: 'json',
			cache: false,
			success(data) {
				let movies = (data.Search ? data.Search : []);
				Actions.showMovieResults(movies);
			},
			error(xhr, status, err) {
				alert(err);
			}
		});
	}
}

export default new API();
