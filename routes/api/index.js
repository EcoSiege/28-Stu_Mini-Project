const router = require('express').Router();
const movieRoutes = require('./movies.routes');
const reviewRoutes = require('./movie-reviews.routes');
const addMovieRoute = require('./add-movie.routes');

router.use('/movies', movieRoutes);
router.use('/movie-reviews', reviewRoutes);
router.use('/add-movie', addMovieRoute);

module.exports = router;