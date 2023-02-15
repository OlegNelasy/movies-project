import{useEffect, useState} from 'react'
import axios from 'axios';



export const TestPages = () => {

    // axios.get('http://api.themoviedb.org/3/movie/now_playing',{
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     params:{
    //         api_key: process.env.REACT_APP_API_KEY,
    //     }
    // })
    // .then((responce) => {
    //     console.log(responce.data)
    // })

    // axios({
    //     method: 'GET',
    //     url: 'http://api.themoviedb.org/3/movie/now_playing',
    //     params: {api_key: process.env.REACT_APP_API_KEY},
    //     headers: {'Content-Type': 'application/json'}
    // }).then((responce) => { console.log(responce.data) })

    const [moviesList, setMoviesList] = useState([]);

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {'Content-Type': 'application/json'},
        params: {api_key: process.env.REACT_APP_API_KEY}
    });


    const getMovie = async () => {
        const data = await instance.get('/movie/now_playing');
        setMoviesList(data.data.results);
        // console.log(data.data.results);
    }

    useEffect(() => {
       getMovie();
    }, []);

    console.log(moviesList);

    return(
        <div>
            <p>Test page</p>
            {/* {moviesList.map((movie) => (<p key={movie.id}>{movie.title}</p>))} */}
            {moviesList.map((movie) => (<img key={movie.id} src={process.env.REACT_APP_API_IMG_URL + movie.poster_path}/>))};
            {/* <p>{moviesList[2] && moviesList[2].title}</p> */}
        </div>
    );
};