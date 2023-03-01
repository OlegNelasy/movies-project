import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/apiInstance";

export const Movie = () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  const getMovie = async () => {
    const data = await apiInstance.get("/movie/" + id);
    setMovieInfo(data.data);
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <p>movie id = {id}</p>
    </div>
  );
};
