import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/apiInstance";
import { NavLink } from "react-router-dom";

import styles from "./Movie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";

export const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const data = await apiInstance.get("/movie/" + id);
    setMovie(data.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

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
      <div className={styles.ButtonContainer}>
        <NavLink className={styles.link}>
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
        <button className={styles.favoriteButton} name="favorite">
          Add to favorite
        </button>
      </div>
    </div>
  );
};
