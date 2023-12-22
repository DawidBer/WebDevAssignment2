// import asyncHandler from 'express-async-handler';
// import express from 'express';
// import { getMovies } from '../tmdb-api';
// import { getMovie } from '../tmdb-api';
// import { getGenres } from '../tmdb-api';
// import { getMovieImages } from '../tmdb-api';
// import { getUpcomingMovies } from '../tmdb-api';
// import { getRecommended } from '../tmdb-api';
// import { getLatestMovies } from '../tmdb-api';
// import { getPopularMovies } from '../tmdb-api';
// import { getTrendingMovies } from '../tmdb-api';
// import { getMovieCredits } from '../tmdb-api';
// import { getActorImages } from '../tmdb-api';
// import { getActor } from '../tmdb-api';
// import { getActorCredits } from '../tmdb-api';
// import { getCast } from '../tmdb-api';
// import { getMovieReviews } from '../tmdb-api';



// const router = express.Router();

// router.get('/tmdb/movies', asyncHandler(async (req, res) => {
//     try {
//         const response = await getMovies();
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/:movieId/form', asyncHandler(async (req, res) => {
//     const { movieId } = req.params;
//     try {
//         const response = await getMovie(movieId);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Movie not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/genres', asyncHandler(async (req, res) => {
//     try {
//         const response = await getGenres();
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/:id/images', asyncHandler(async (req, res) => {
//         const { id } = req.params;
//     try {
//         const response = await getMovieImages(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Images not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/movies/upcoming', asyncHandler(async (req, res) => {
//     try {
//         const response = await getUpcomingMovies();
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Upcoming movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/:id/recommendations', asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     try {
//         const response = await getRecommended(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Recommended movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/latest', asyncHandler(async (req, res) => {
//     try {
//         const response = await getLatestMovies();
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Latest movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/movies/popular', asyncHandler(async (req, res) => {
//     try {
//         const response = await getPopularMovies();
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Popular movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/trending/movies', asyncHandler(async (req, res) => {
//     try {
//         const response = await getTrendingMovies();
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Trending movies not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/:id/credits', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     try {
//         const response = await getMovieCredits(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Movie credits not found:', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/actors/:id/images', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     try {
//         const response = await getActorImages(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Actor images not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/movies/tmdb/:id', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     try {
//         console.log("siema",id);
//         const response = await getActor(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Actor not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/actors/:id/details', asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     console.log("lel", id);

//     try {
//         const response = await getActorCredits(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Actor credits not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/movie/:id/cast', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     try {
//         const response = await getCast(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Cast not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     try {
//         const response = await getMovieReviews(id);
//         res.status(200).json(response); 
//     } catch (error) {
//         console.error('Movie reviews not found', error.message);
//         res.status(500).json({ message: 'Server Error'});
//     }
// }));

// export default router;


