import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './components/Movie'
import NavbarMovie from './components/NavbarMovie'
import InputRangeRate from './components/InputRangeRate'
import Filter from './components/Filter'
import Banner from './components/Banner'

const apiKey = process.env.REACT_APP_APIKEY
let movieList = []
let page = 1
function App() {
    let [movies, setMovies] = useState([])
    let [categoryLoadMore, setcategoryLoadMore] = useState("now_playing")
    let currentPlaying = async () => {
        console.log(apiKey)
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        let data = await fetch(url)
        let dataResult = await data.json()
        console.log(dataResult)
        movieList = dataResult.results
        setMovies(dataResult.results)
    }

    let loadMoreMovie = async (categoryLoadMore) => {
        page++
        let url = `https://api.themoviedb.org/3/movie/${categoryLoadMore}?api_key=${apiKey}&language=en-US&page=${page}`
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
        setcategoryLoadMore(catergory)
    }

    let onSearch = (keyword) => {
        if (keyword === '') {
            setMovies(movieList)
        } else {
            setMovies(movies.filter((movie) => movie.title.toLowerCase().includes(keyword.toLowerCase())))
        }
    }

    let onSortByHighestPopularity = () => {
        let newMovieList = [...movies].sort((a, b) => a.popularity > b.popularity ? -1 : 1)
        setMovies(newMovieList)
    }

    let onSortByLowestPopularity = () => {
        let newMovieList = [...movies].sort((a, b) => a.popularity < b.popularity ? -1 : 1)
        setMovies(newMovieList)
    }

    let onFilterRating = (rating) => {
        console.log(rating)
        console.log(rating.min, rating.max)
        setMovies(movies.filter((movie) => movie.vote_average >= rating.min && movie.vote_average <= rating.max))
        if (rating.min === 0 && rating.max === 10) {
            setMovies(movieList)
        }
        console.log('rating movie', movies)
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
            <NavbarMovie onSearch={onSearch} />
            <div className="row w-100">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <Banner />
                </div>
                <div className="col-lg-1"></div>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <InputRangeRate onFilterRating={onFilterRating} />
            </div>
            <div className="row mt-2 w-100">
                <div className="col-lg-2 mt-5">
                    <Filter onFilterCategory={onFilterCategory}
                        onSortByHighestPopularity={onSortByHighestPopularity}
                        onSortByLowestPopularity={onSortByLowestPopularity} />
                </div>
                <div className="col-lg-9">
                    <Movie movieList={movies} />
                </div>
                <div className="col-lg-1"></div>
            </div>
            <button onClick={() => loadMoreMovie(categoryLoadMore)}>Load More</button>
        </div>
    );
}

export default App;
