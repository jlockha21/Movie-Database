import React, { useEffect, useState } from 'react';
import { fetchComingSoonMovies } from './CSapi'; // Import the API function
import '../Liststyle.css';

const ComingSoon = () => {
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchComingSoonMovies();
        setComingSoonMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, []);

  const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isMovieInFavorites = favorites.some((fav) => fav.id === movie.id);
    if (!isMovieInFavorites) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Movie added to favorites!');
    } else {
      alert('Movie already in favorites!');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="section-title">Coming Soon</h1>
      <div className="movie-container">
        {comingSoonMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
            <h3 className="movie-title">{movie.title}</h3>
            <button onClick={() => addToFavorites(movie)} className="add-to-favorites-button">
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
