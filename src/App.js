import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './components/Movie'
import NavbarMovie from './components/NavbarMovie'
import InputRangeRate from './components/InputRangeRate'
import Filter from './components/Filter'

const apiKey = process.env.REACT_APP_APIKEY
let movieList = []
function App() {
    let [movies, setMovies] = useState([])
    let currentPlaying = async () => {
        console.log(apiKey)
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        let data = await fetch(url)
        let dataResult = await data.json()
        console.log(dataResult)
        movieList = dataResult.results
        setMovies(dataResult.results)
    }
    let page = 1
    let loadMoreMovie = async () => {
        page++
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`
        let data = await fetch(url)
        let dataResult = await data.json()
        setMovies(movies.concat(dataResult.results))
    }

    let onFilterCategory = async (catergory) => {
        let url = `https://api.themoviedb.org/3/movie/${catergory}?api_key=${apiKey}&language=en-US&page=1`
        let data = await fetch(url)
        let dataResult = await data.json()
        console.log(dataResult)
        setMovies(dataResult.results)
    }

    let onSearch = (keyword) => {
       if(keyword === '') {
        setMovies(movieList)
       }else {
        setMovies(movies.filter((movie) => movie.title.toLowerCase().includes(keyword.toLowerCase())))
       }
    }

    let onSortByHighestPopularity = () => {
        let newMovieList = [...movies].sort((a,b) => a.popularity > b.popularity ? -1 : 1)
        setMovies(newMovieList)
    }

    let onSortByLowestPopularity = () => {
        let newMovieList = [...movies].sort((a,b) => a.popularity < b.popularity ? -1 : 1)
        setMovies(newMovieList)
    }

    useEffect(currentPlaying, [])
   

    if (movies === []) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className="App">
            <NavbarMovie onSearch={onSearch}/>
            <div className="d-flex justify-content-center mt-5">
                <InputRangeRate />
            </div>
            <div className="row mt-2">
                <div className="col-lg-2 mt-5">
                    <Filter onFilterCategory={onFilterCategory} 
                    onSortByHighestPopularity={onSortByHighestPopularity} 
                    onSortByLowestPopularity={onSortByLowestPopularity}/>
                </div>
                <div className="col-lg-9">
                    <Movie movieList={movies} />
                </div>
                <div className="col-lg-1"></div>
            </div>
            <button onClick={loadMoreMovie}>Load More</button>
        </div>
    );
}

export default App;
