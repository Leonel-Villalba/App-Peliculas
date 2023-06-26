import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"
// import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { useQuery } from "react-query";

export function MovieDetails(){
    const {movieId} = useParams();
    const { data: movie, isLoading } = useQuery(["movieDetails", movieId], () =>
    get("/movie/" + movieId)
    );


    // TODO ESTE CODIGO ESTÁ RESUMIDO EN LA LINE DE ARRIBA CON USE QUERY
    
    // const [isLoading, setIsLoading] = useState(true);
    // const [movie, setMovie] = useState(null);

    
    // useEffect(() => {
    //     setIsLoading(true);
    //     get("/movie/" + movieId).then((data) => {
    //         setMovie(data);
    //         setIsLoading(false);
    //     });
    // }, [movieId]);

    if(isLoading){
        return <Spinner/>;
    }

    // if(!movie){
    //     return null;
    // }



    const imageUrl = getMovieImg(movie.poster_path, 500);
    // "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Title: </strong>{movie.title} </p>
            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p><strong>Description:</strong> {movie.overview} </p>
        </div>
    </div>;
}