//import tools to generate the routes
const { Router } = require('express');
const router = Router();
const connection = require('../connection');
//Categories Routes

//Routes of all categories
router.get('/', (req, res) => {
    console.log(req)
    connection.query('SELECT * from category', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }

    });
});

//Routes of categories by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM category WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            // res.json(rows)
            res.send(rows);
        } else {
            console.log(err);
        }

    })
})
//Export module of routes
module.exports = router;

