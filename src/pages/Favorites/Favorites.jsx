import FavoriteMovie from "./FavoriteMovie";
import { useEffect, useState } from "react";
import { FAVORITE_MOVIES } from "../../constants/constants.js";

import styles from "./Favorites.module.scss";

export const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleDeleteFavoriteMovie = (id) => {
    const filteredFavoriteMovies = favoriteMovies.filter(
      (favoriteMovie) => favoriteMovie.id !== id
    );
    localStorage.setItem(
      FAVORITE_MOVIES,
      JSON.stringify(filteredFavoriteMovies)
    );
    setFavoriteMovies(filteredFavoriteMovies);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(FAVORITE_MOVIES)) || [];
    setFavoriteMovies(data);
  }, []);

  return (
    <>
      <div className={styles.сontainer}>
        <p className={styles.title}>
          {favoriteMovies.length
            ? "My favorite"
            : "You Don't Have Favorite Movies"}
        </p>
        <div className={styles.favoriteContainer}>
          {favoriteMovies.map((movie) => (
            <FavoriteMovie movie={movie} onDelete={handleDeleteFavoriteMovie} />
          ))}
        </div>
      </div>
    </>
  );
};
