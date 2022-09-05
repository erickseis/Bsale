const { Router } = require('express');
const router = Router();
const connection = require('../connection');
//Categories Routes

router.get('/', (req, res) => {
    console.log(req)
    connection.query('SELECT * from category', (err, data, fields) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }

    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    //
    connection.query('SELECT * FROM category WHERE id = ?', [id], (err, data, fields) => {
        if (!err) {
            res.json(data)
            // res.send(rows);
        } else {
            console.log(err);
        }

    })
})

module.exports = router;

