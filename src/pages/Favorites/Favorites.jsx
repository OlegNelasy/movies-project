import FavoriteMovie from "./FavoriteMovie";
import { useEffect, useState } from "react";
import { FAVORITE_MOVIES } from "../../constants/constants.js";

import styles from "./Favorites.module.scss";

export const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const getFavoriteMovies = async () => {
    const data = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(data);
  };

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
    getFavoriteMovies();
  }, []);

  return (
    <>
      <div className={styles.сontainer}>
        <p className={styles.title}>
          {favoriteMovies.length
            ? "My favorite"
            : "You Don't Have Favorite Movies"}
        </p>
        <div className={styles.favoriteItemContainer}>
          {favoriteMovies.map((movie) => (
            <FavoriteMovie movie={movie} onDelete={handleDeleteFavoriteMovie} />
          ))}
        </div>
      </div>
    </>
  );
};
