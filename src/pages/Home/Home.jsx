import styles from "./Home.module.scss";

import { Pagination } from "@mui/material";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/apiInstance";

export const Home = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = async (page) => {
    const data = await apiInstance.get("movie/now_playing", {
      params: { page },
    });
    setMoviesList(data.data.results);
    setTotalPages(data.data.total_pages);
  };

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  return (
    <section>
      <div className={styles.container}>
        <p className={styles.title}>Latest Releases</p>
        <div className={styles.postersContainer}>
          {moviesList.map((movie) => (
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
          ))}
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
    </section>
  );
};
