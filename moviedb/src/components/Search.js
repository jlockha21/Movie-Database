import React, { useState } from 'react';
import { fetchSearchResults } from './SrchAPI'; // Import named export fetchSearchResults
import '../search.css';

function Search() {
    const [searchResults, setSearchResults] = useState([]); // Initialize searchResults as an empty array
    const [query, setQuery] = useState('');
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSearch = async () => {
      const results = await fetchSearchResults(query); // Call fetchSearchResults function
      setSearchResults(results || []); // Set searchResults to results if available, otherwise set it to an empty array
    };
  
    return (
      <div>
        <h1 className='search-title'>Search Movies</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={handleInputChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="movie-container">
          {searchResults.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
              <div className="movie-details">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-overview">{movie.overview}</p>
                {/* You can add more details or styling as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Search;
