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
import { Cancel } from "@mui/icons-material";

export const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [stateFavorite, setStateFavorite] = useState(false);

  const getMovie = async () => {
    const data = await apiInstance.get("/movie/" + id);
    setMovie(data.data);
  };

  // const qwe = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  // console.log("qwe --->", qwe);

  // if (movie) {
  //   const qqq = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  //   if (qqq.some((favoriteMovies) => favoriteMovies.id === movie.id)) {
  //     setStateFavorite(true);
  //   }
  // }

  const addToFavorites = () => {
    const qwe = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    // console.log("qwe --->", qwe);
    if (qwe) {
      if (!qwe.some((favoriteMovies) => favoriteMovies.id === movie.id)) {
        localStorage.setItem("favoriteMovies", JSON.stringify([...qwe, movie]));
        setStateFavorite(true);
      }
    }
    // const test = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    // console.log("set --->", test);
  };

  const removeFromFavorites = () => {
    const qwe = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    console.log("qwe --->", qwe);
    if (qwe) {
      const qwe1 = qwe.filter((favoriteMovies) => favoriteMovies !== movie);
      // const qwe1 = qwe.slice(0, -1);
      console.log("filter dell--->", qwe1);
      localStorage.setItem("favoriteMovies", JSON.stringify(qwe1));

      // if (qwe.some((favoriteMovies) => favoriteMovies.id === movie.id)) {
      //   // localStorage.removeItem("favoriteMovies", movie);
      //   setStateFavorite(false);
      // }
      setStateFavorite(false);
    }
    const test = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    console.log("set dell --->", test);
  };

  // if (movie) {
  //   console.log("test id --->", movie.id);
  //   const isFavorite = qwe.some(
  //     (favoriteMovies) => favoriteMovies.id === movie.id
  //   );
  // }

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
      <div className={styles.buttonContainer}>
        <NavLink className={styles.link} to={"/"}>
          <FontAwesomeIcon icon={faCircleLeft} className={styles.linkArrow} />
          <p>Back to list</p>
        </NavLink>
        <NavLink className={styles.link} /*to={"/Movie/" + (movie.id + 1)}*/>
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
          onClick={stateFavorite ? removeFromFavorites : addToFavorites}
        >
          {stateFavorite ? "remove from" : "Add to"} favorite
        </button>
      </div>
    </div>
  );
};
