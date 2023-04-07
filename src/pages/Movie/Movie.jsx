import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/apiInstance";
import { NavLink } from "react-router-dom";

import { FAVORITE_MOVIES } from "../../constants/constants.js";
import styles from "./Movie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";

export const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const getMovie = async () => {
    const data = await apiInstance.get("/movie/" + id);
    setMovie(data.data);
  };

  const addToFavorites = () => {
    const favoriteMovies =
      JSON.parse(localStorage.getItem(FAVORITE_MOVIES)) || [];
    localStorage.setItem(
      FAVORITE_MOVIES,
      JSON.stringify([...favoriteMovies, movie])
    );
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    const favoriteMovies =
      JSON.parse(localStorage.getItem(FAVORITE_MOVIES)) || [];
    const filteredFavoriteMovies = favoriteMovies.filter(
      (favoriteMovie) => favoriteMovie.id !== movie.id
    );
    localStorage.setItem(
      FAVORITE_MOVIES,
      JSON.stringify(filteredFavoriteMovies)
    );
    setIsFavorite(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    if (movie) {
      const favoriteMovies =
        JSON.parse(localStorage.getItem(FAVORITE_MOVIES)) || [];
      if (
        favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id)
      ) {
        setIsFavorite(true);
      }
    }
  }, [movie]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.сontainer}>
      <img
        className={styles.backgroundImg}
        src={
          process.env.REACT_APP_API_IMG_URL + "/original" + movie.backdrop_path
        }
        alt={movie.title}
      />
      <div className={styles.buttonContainer}>
        <NavLink className={styles.link} to={"/"}>
          <FontAwesomeIcon icon={faCircleLeft} className={styles.linkArrow} />
          <p>Back to list</p>
        </NavLink>
        <NavLink className={styles.link}>
          <p>Next Movie</p>
          <FontAwesomeIcon icon={faCircleRight} className={styles.linkArrow} />
        </NavLink>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.poster}>
          <img
            src={
              process.env.REACT_APP_API_IMG_URL + "/w500" + movie.poster_path
            }
            alt={movie.title}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.dataMovie}>
            <p className={styles.title}>{movie.title}</p>
            <div className={styles.movieInfo}>
              <p className={styles.movieInfoParagraf}>
                Score: {movie.vote_average}
              </p>
              <p className={styles.movieInfoParagraf}>
                Release Date: {movie.release_date}
              </p>
            </div>
          </div>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
        <button
          className={styles.favoriteButton}
          name="favorite"
          onClick={isFavorite ? removeFromFavorites : addToFavorites}
        >
          {isFavorite ? "Remove from" : "Add to"} favorite
        </button>
      </div>
    </div>
  );
};
