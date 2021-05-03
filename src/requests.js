const API_KEY ="33309913e49426e696008e27d2764629"

const requests = {
fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/dicover/movie?api_key=${API_KEY}%with_genres=28`,
fetchComedyMovies: `/dicover/movie?api_key=${API_KEY}%with_genres=35`,
fetchHorrorMovies: `/dicover/movie?api_key=${API_KEY}%with_genres=27`,
fetchRomanceMovies: `/dicover/movie?api_key=${API_KEY}%with_genres=10749`,
fetchDocumentaries: `/dicover/movie?api_key=${API_KEY}%with_genres=99`
}

export default requests