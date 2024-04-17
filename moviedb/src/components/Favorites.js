import React, { useEffect, useState } from 'react';
import '../Favorites.css';

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage when the component mounts
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);

  const removeFromFavorites = (id) => {
    // Filter out the movie with the specified id and update the favorites list
    const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== id);
    setFavoriteMovies(updatedFavorites);
    // Update local storage with the updated favorites list
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h1 className="favorites-header">Favorites</h1>
      <div className="movie-container">
        {favoriteMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
            <h3 className="movie-title">{movie.title}</h3>
            <button onClick={() => removeFromFavorites(movie.id)} className="remove-from-favorites-button">
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
