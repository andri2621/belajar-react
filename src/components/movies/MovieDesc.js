import {useParams} from 'react-router'
import {movieData} from './MovieData'
import '../movies/Movie.css'
import * as css from './MovieDescStyle';





const MovieDescription = () => {
    let {id} = useParams()
    console.log(id)
    let MovieDesc = movieData.find(x => x.id == id)
    console.log(MovieDesc.title)


    return (
        // <div className="kartuDetail">
        //     <h2>{MovieDesc.title}</h2>v
        //     <img src={'../images/'+MovieDesc.poster_path}></img>
        // </div>
        
        <css.InfoStyle>
            <h2>{MovieDesc.title}</h2>
            <img src={'../images/'+MovieDesc.poster_path}></img>
            <p>{MovieDesc.overview}</p>
        </css.InfoStyle>

    )
}












export {MovieDescription}