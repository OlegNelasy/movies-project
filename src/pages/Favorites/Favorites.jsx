import styles from "./Favorites.module.scss";
import { NavLink } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";

export const Favorites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 20;

  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  //   console.log(favoriteMovies);

  const totalPages = Math.ceil(favoriteMovies.length / moviesPerPage);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  //   console.log("currentPage = ", currentPage);

  return (
    <>
      <div className={styles.сontainer}>
        <p className={styles.title}>
          {favoriteMovies.length
            ? "Favorite Films"
            : "You Don't Have Favorite Movies"}
        </p>
        <div className={styles.postersContainer}>
          {favoriteMovies.map((movie, index) =>
            index >= (currentPage - 1) * moviesPerPage &&
            index < (currentPage - 1) * moviesPerPage + moviesPerPage ? (
              <NavLink
                to={"/Movie/" + movie.id}
                className={styles.poster}
                key={movie.id}
              >
                <img
                  src={
                    process.env.REACT_APP_API_IMG_URL +
                    "/w342" +
                    movie.poster_path
                  }
                  alt={movie.title}
                />
              </NavLink>
            ) : null
          )}
        </div>
        <Pagination
          className={styles.pagination}
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </div>
    </>
  );
};
