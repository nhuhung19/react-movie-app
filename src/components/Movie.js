import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Movie(props) {
    let htmlMovies = props.movieList.map((item) => {
        return (
            <div key={item.id} className="col-lg-4 mt-5 mx-0 ">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} className="card-img-top" alt="..." />
                </div>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{item.title}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="card-body">
                                    <p className="card-text">{item.overview}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Rating:{item.vote_average} / Popularity: {item.popularity}</li>
                                    <li className="list-group-item">Day Release: {item.release_date}</li>
                                    <li className="list-group-item">Vote Count: {item.vote_count}</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span type="button" data-toggle="modal" data-target="#myModal">
                        View More
                </span>
            </div>
        )

    });

    return (
        <div className="row">
            {htmlMovies}
        </div>
    )
}
