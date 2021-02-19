import {useParams} from 'react-router'
import {movieData} from './MovieData'
import '../movies/Movie.css'


const MovieDescription = () => {
    let {id} = useParams()
    console.log(id)
    let MovieDesc = movieData.find(x => x.id == id)
    console.log(MovieDesc.title)
    return (
        // <div className="kartuDetail">
        //     <h2>{MovieDesc.title}</h2>
        //     <img src={'../images/'+MovieDesc.poster_path}></img>
        // </div>
        
        
        <div className="kartuDetail">

            <h2>{MovieDesc.title}</h2>
            <img src={'../images/'+MovieDesc.poster_path}></img>
            <p>{MovieDesc.overview}</p>


        </div>
        
    )

}



export {MovieDescription}