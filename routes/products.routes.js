//import tools to generate the routes
const { Router, res } = require('express');
const router = Router();
const connection = require('../connection');

//Products Routes

//Routes of all products
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

//Routes of all products
router.get('/name', (req, res) => {
    console.log(req.body)
    connection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    });
});

//Route to search for products by category ID 
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

//Route to search for products by name
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
//Export module of routes
module.exports = router;
