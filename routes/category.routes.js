const { Router } = require('express');
const router = Router();
const connection = require('../connection');

router.get('/', (req, res) => {
    connection.query('SELECT * from category', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }

    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    //
    connection.query('SELECT * FROM category WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            // res.send(rows);
        } else {
            console.log(err);
        }

    })
})

module.exports = router;

