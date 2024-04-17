// ComingSoonApi.js
export async function fetchComingSoonMovies() {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=be464c9d854f912b242f1d4b04e00664");
      if (!response.ok) {
        throw new Error('Failed to fetch out now movie data');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error('Failed to fetch out now movie data: ' + error.message);
    }
  }
  