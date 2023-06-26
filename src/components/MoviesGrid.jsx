// import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import { useInfiniteQuery } from "react-query";

// eslint-disable-next-line react/prop-types
export function MoviesGrid({ search }) {
  // ACA USAMOS REACT QUERY
  const {data, isLoading, hasNextPage, fetchNextPage} = useInfiniteQuery(["movies", search], ({pageParam = 1}) => {
    const searchUrl = search
      ? "/search/movie?query=" + search +"&page=" + pageParam
      : "/discover/movie?page=" + pageParam;
      return get(searchUrl)
  }, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return false;
      return lastPage.page + 1;
    }
  });

  const movies = data?.pages.reduce((prevMovies, page) => prevMovies.concat(page.results), []) ?? [];

  // PASAMOS TODO A REACT QUERY Y USAMOS INFINITEQUERY PARA REEMPLAZAR EL INFINITE SCROLL
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);


  // useEffect(() => {
  //   setIsLoading(true)
  //   const searchUrl = search
  //     ? "/search/movie?query=" + search +"&page=" + page
  //     : "/discover/movie?page=" + page;
  //   get(searchUrl)
  //     .then((data) => {
  //       setMovies((prevMovies) => prevMovies.concat(data.results));
  //       setHasMore(data.page < data.total_pages)
  //       setIsLoading(false)
  //   });
  // }, [search, page]);

  if(!isLoading && movies.length === 0){
    return <Empty/>
  }


  return (
    <InfiniteScroll dataLength={movies.length} 
    hasMore={hasNextPage || isLoading} 
    next={() => fetchNextPage()}
    loader={<Spinner/>}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie, index) => (
          <MovieCard key={movie.id || index} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}