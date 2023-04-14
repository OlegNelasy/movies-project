import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Favorites.module.scss";

export default function FavoriteMovie(props) {
  const { movie, onDelete } = props;

  const handleDelete = () => {
    onDelete(movie.id);
  };

  return (
    <div className={styles.favoriteItemContainer}>
      <NavLink
        className={styles.favoriteLinkContainer}
        to={"/Movie/" + movie.id}
        key={movie.id}
      >
        <div className={styles.poster}>
          <img
            src={
              process.env.REACT_APP_API_IMG_URL + "/w342" + movie.poster_path
            }
            alt={movie.title}
          />
        </div>
        <div className={styles.movieInformation}>
          <p className={styles.movieTitle}>{movie.title}</p>
          <p className={styles.movieOverview}>{movie.overview}</p>
        </div>
      </NavLink>
      <button
        className={styles.unfavoriteButton}
        name="Unfavorite"
        onClick={handleDelete}
      >
        Unfavorite
      </button>
    </div>
  );
}
