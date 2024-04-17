import React, { useEffect, useState } from 'react';
import '../style.css';

function Movie() {
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=be464c9d854f912b242f1d4b04e00664")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                return res.json();
            })
            .then(json => setMovieList(json.results))
            .catch(error => setError(error.message));
    }

    useEffect(() => {
        getMovie();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {movieList.map((movie) => (
                <img key={movie.id} style={{ width: "300px", height: "250px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            ))}
        </div>
    )
}

export default Movie;
