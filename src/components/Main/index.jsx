import React from 'react'
import styles from './Main.module.scss';

import{useEffect, useState} from 'react'
import axios from 'axios'; 


export default function Main() {
    const [moviesList, setMoviesList] = useState([]);

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {'Content-Type': 'application/json/'},
        params: {api_key: process.env.REACT_APP_API_KEY, page : 1}
    });


    const getMovie = async () => {
        const data = await instance.get('movie/now_playing');
        setMoviesList(data.data.results);
        // console.log(data.data.results);
    }

    useEffect(() => {
       getMovie();
    }, []);
  
    return (
        <section className={styles.container}>
            {moviesList.map((movie, i) => (<img className={styles.poster} key={movie.id} src={process.env.REACT_APP_API_IMG_URL + movie.poster_path}/>))}
        </section>
    )
}
