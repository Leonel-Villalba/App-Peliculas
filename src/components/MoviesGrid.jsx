import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQ5M2IxMmNhMWM3MzI2NDNjNDcyOGU5MDU4MmIxYSIsInN1YiI6IjY0N2YzMWM5MGUyOWEyMmJlMWYxMjkxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwFO0dw0k4FwNGt-SkgiSVfxDmnpGmUarzQvNGkwAJA",
      "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
    });

  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}