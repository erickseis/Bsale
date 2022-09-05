const { Router, res } = require('express');
const router = Router();
const connection = require('../connection');

router.get('/', (req, res) => {
    console.log(req.body)
    connection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    });
});

router.get('/undefined', (req, res) => {
    console.log(req.body)
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
router.get('/name/:name', (req, res) => {
    console.log(req.body)
    const { name } = req.params;
    connection.query(`SELECT * FROM product WHERE name LIKE ?`, [`%${name}%`], (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }

    })
})


connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM category ORDER BY name DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

module.exports = router;
