//consts
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// our router will take a user id to fetch all closets from the db
router.get('/', (req, res) => {
    // query of db should select everything from the closet where the user_id is the same as the user id in the closet db
    console.log( 'params', req.params );
    console.log( 'query', req.query );
    const queryString = `SELECT * FROM closet WHERE user_id = $1;`;
    const values = [req.user.id];
    pool.query(queryString, values)
    .then(results => {
        res.send(results.rows);
    }).catch((err => {
        console.log( 'error in GET /closet', err );
        res.sendStatus(500);
    }))
})

module.exports = router