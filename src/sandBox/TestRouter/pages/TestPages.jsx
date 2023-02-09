import{useEffect} from 'react'
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

    

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {'Content-Type': 'application/json'},
        params: {api_key: process.env.REACT_APP_API_KEY}
    });


    const getMovi = async () => {
        const data = await instance.get('/movie/now_playing');
        console.log(data.data.results);
    }

    useEffect(() => {
       getMovi();
    });

    return(
        <div>
            <p>Test page</p>
            <p></p>
        </div>
    );
};