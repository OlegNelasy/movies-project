import styles from "./Home.module.scss";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/apiInstance";

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  const getMovie = async () => {
    const data = await apiInstance.get("movie/now_playing", {
      params: { page: 1 },
    });
    setMoviesList(data.data.results);
    console.log(data.data.results);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section>
      {/* <p className={styles.LatestReleses}>Latest Releses</p> */}
      <div className={styles.container}>
        {moviesList.map((movie) => (
          <NavLink
            to={"/Movie/" + movie.id}
            className={styles.poster}
            key={movie.id}
          >
            <img
              src={process.env.REACT_APP_API_IMG_URL + movie.poster_path}
              alt={movie.title}
            />
          </NavLink>
        ))}
      </div>
    </section>
  );
};
