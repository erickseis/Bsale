const { Router } = require('express');
const router = Router();
const connection = require('../connection');
// const controller = {}


router.get('/', (req, res) => {

    connection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    });
});


router.get('/:id', (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    connection.query(`SELECT * FROM product WHERE category = ?`, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }

    })
})







module.exports = router;
