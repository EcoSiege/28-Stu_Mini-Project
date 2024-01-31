const router = require('express').Router();
const db = require('../../config/connect');

router.get('/', (req, res) => {
    db.query('SELECT * FROM movies', (err, data) => {
        res.json ({ status: 'success', payload: data})
    })
    console.log('arrived at /movies')
});

router.delete('/:movie_name', (req, res) => {
    db.query(`DELETE FROM movies WHERE movie_name = ?`, movie_name, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
});

module.exports = router;