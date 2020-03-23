import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function Movie(props) {
    // let renderGenres = (genres) => {
    //     if (!genres.some(genre => genre === undefined)) {
    //         return genres.map((el, i) => <span className="mr-2 rounded-pill bg-success p-2 text-light" key={i}>{el.name}</span>)
    //     }
    // }
    // console.log(props.movieList.genre_ids)
    
    let htmlMovies = props.movieList.map((item, i) => {
        let genreNames = []
        for(let i = 0; i < item.genre_ids.length; i++){
            if(props.genres.length > 0){
                let genreName = (props.genres.find(el => el.id ===  item.genre_ids[i])).name
                genreNames.push(genreName)
            }
        }
        // console.log(genreNames)
        return (
            <div key={item.id} className="col-lg-3 col-md-4 mt-5 mx-0 ">
                <div className="card w-100 h-100" style={{ width: '18rem' }}>
                    <img style={{ cursor: 'pointer' }} onClick={() => props.onShowVideo(item.id)} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} className="h-100 card-img-top" alt="..." />
                </div>
                <div className="d-flex justify-content-between px-1 mt-1">
                    <span style={{ color: '#E50914' }} type="button" data-toggle="modal" data-target={`#myModal-${i}`}>
                        View More
                </span>
                    <span className="text-light"><FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} /> {item.vote_average}</span>
                </div>

                <div className="modal fade" id={`myModal-${i}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="card border-0 pl-2">
                                    <h4 className="modal-title">{item.title}</h4>
                                </div>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="card-body">
                                    <p className="card-text">{item.overview}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Rating: {item.vote_average} / Popularity: {item.popularity}</li>
                                    <li className="list-group-item">Day Release: {item.release_date}</li>
                                    <li className="list-group-item">Vote Count: {item.vote_count}</li>
                                    <li className="list-group-item">{genreNames.map(gener => <span className="mr-2 rounded-pill bg-success p-2 text-light">{gener}</span>)}</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

    });

    return (
        <div className="row">
            {htmlMovies}
        </div>
    )
}
