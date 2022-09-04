const { Router, res } = require('express');
const router = Router();
const connection = require('../connection');


router.get('/', (req, res) => {

    connection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    });
});


router.get('/id/:id', (req, res) => {
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
router.get('/:name', (req, res) => {
    console.log(req.body)
    const { name } = req.params;
    connection.query(`SELECT * FROM product WHERE name LIKE ?`, [`%${name}%`], (err, data, fields) => {
        if (!err) {
            res.json(data)
        } else {
            console.log(err);
        }

    })
})


module.exports = router;
