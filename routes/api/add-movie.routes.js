const router = require('express').Router();
const db = require('../../config/connect');

router.post('/', (req, res) => {
    db.query(`INSERT INTO movies(movie_name, year_released, director) VALUES(${req.body.movie_name}, ${req.body.year_released}, ${req.body.director})`, req.params.id, (err, data) => {
        res.json({ status: "success", payload: data })
      })
    console.log('arrived at /add-movies')
});

module.exports = router;