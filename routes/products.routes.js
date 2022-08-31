const { Router } = require('express');
const router = Router();
const connection = require('../connection');

router.get('/product', (req, res) => {
    connection.query('SELECT * from product', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
