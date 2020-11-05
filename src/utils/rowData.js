const { REACT_APP_TMDB_API_KEY } = process.env;

const rowData = [
  {
    title: 'Trending Now',
    requestURL: `/trending/all/week?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`,
  }, {
    title: 'Netflix Originals',
    requestURL: `/discover/tv?api_key=${REACT_APP_TMDB_API_KEY}&with_networks=213`,
  }, {
    title: 'Top Rated Movies',
    requestURL: `/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`,
  }, {
    title: 'Action',
    requestURL: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=28`,
  }, {
    title: 'Comedy',
    requestURL: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=35`,
  }, {
    title: 'Horror',
    requestURL: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=27`,
  }, {
    title: 'Romance',
    requestURL: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  }, {
    title: 'Documentaries',
    requestURL: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=99`,
  }
];

export default rowData;

// fetchTrending: `/trending/all/week?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`,
// fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_TMDB_API_KEY}&with_networks=213`,
// fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`,
// fetchActionMovies: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=35`,
// fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=27`,
// fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=10749`,
// fetchDocumentariesMovies: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=99`,
