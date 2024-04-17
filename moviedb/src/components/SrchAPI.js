export async function fetchSearchResults(query) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=be464c9d854f912b242f1d4b04e00664&query=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch search results: ' + error.message);
  }
}
