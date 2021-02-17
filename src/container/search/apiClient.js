import { movieData } from '../../components/movies/MovieData'; //1
import { genre } from './genre'; //1
import _ from 'lodash'; //2
// get genre description
function getGenreDesc(movieId) { //3
    let genreIds = _.find(movieData, x => x.id ===
        movieId).genre_ids; //4
    let genreDes = []; //5
    for (let genreId of genreIds) { //6
        genreDes.push(_.find(genre, x => x.id === genreId).name);
    }
    console.log('genres : ' + genreDes);
    return genreDes; //7

}
export { getGenreDesc }