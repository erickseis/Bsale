const { Router } = require('express');
const router = Router();
const connection = require('../connection');


router.get('/', (req, res) => {

    connection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            // res.send(rows);
        } else {
            console.log(err);
        }
    });
});




router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    connection.query('SELECT * FROM product WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows)
            // res.send(rows);
        } else {
            console.log(err);
        }

    })
})

module.exports = router;
