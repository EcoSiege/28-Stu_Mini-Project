const router = require('express').Router();
const db = require('../../config/connect');

router.get('/', (req, res) => {
    db.query('SELECT * FROM reviews', (err, data) => {
        res.json({ status: 'success', payload: data })
    })
});

router.post('/', (req, res) => {
    db.query(`INSERT INTO reviews(movie_name, reviewer_name, stars, review_text) VALUES(${req.body.movie_name}, ${req.body.reviewer_name}, ${req.body.stars}, ${req.body.review_text})`, req.params.id, (err, data) => {
        res.json({ status: "success", payload: data })
    })
});

router.put('/:movie_name', (req, res) => {
    db.query(` UPDATE reviews 
    SET movie_name = '${req.body.movie_name}', 
        reviewer_name = '${req.body.reviewer_name}',
        stars = '${req.body.stars}',
        review_text = '${req.body.review_text}'
    WHERE movie_name = ?`,
    req.params.id, 
    (err, data) => {
      res.json({ status: "success", payload: data })
    })
});

module.exports = router;