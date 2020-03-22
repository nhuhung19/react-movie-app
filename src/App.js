import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './components/Movie'
import NavbarMovie from './components/NavbarMovie'
import InputRangeRate from './components/InputRangeRate'
import SideBar from './components/SideBar'
import Banner from './components/Banner'
import { findAllByAltText } from '@testing-library/react';

const apiKey = process.env.REACT_APP_APIKEY
let movieList = []
let page = 1
function App() {
    let [movies, setMovies] = useState([])
    let [genres, setGenres] = useState([])
    let [categoryLoadMore, setcategoryLoadMore] = useState("now_playing")
    let currentPlaying = async () => {
        // console.log(apiKey)
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        let data = await fetch(url)
        let dataResult = await data.json()
        console.log('data', dataResult)
        movieList = dataResult.results
        // movieList.map(movie => {
        //     movie.genres = movie.genre_ids.map(genre => genres.find(el => el.id === genre))
        // })
        console.log('data array', dataResult.results)
        setMovies(dataResult.results)
        
    }

    let fetchGenres = async () => {
        // get url genre list
        let urlGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        let dataGenre = await fetch(urlGenre)
        let resultGenre = await dataGenre.json()
        console.log('genre list:', resultGenre.genres)
        setGenres(resultGenre.genres)
        console.log('genre list:', genres)
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
        setMovies(movieList.filter((movie) => movie.vote_average >= rating.min && movie.vote_average <= rating.max))
        console.log('rating movie', movies)
    }

    useEffect(() => {
        currentPlaying()
        fetchGenres()
    }, [])

    // useEffect(() => {
    //     currentPlaying()
    // }, [genres]) // put genres inside array mean. hey, if genres change exicute function currentPlaying


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
                <div className="col-lg-2 col-md-2 mt-5  ">
                    <SideBar onFilterCategory={onFilterCategory}
                        onSortByHighestPopularity={onSortByHighestPopularity}
                        onSortByLowestPopularity={onSortByLowestPopularity} />
                </div>
                <div className="col-lg-9 col-md-9">
                    <Movie movieList={movies} genres={genres}/>
                </div>
                <div className="col-lg-1 col-md-0"></div>
            </div>
            <button onClick={() => loadMoreMovie(categoryLoadMore)}>Load More</button>
        </div>
    );
}

export default App;
