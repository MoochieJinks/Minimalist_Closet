//consts
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// our router will take a user id to fetch all closets from the db
router.get('/', (req, res) => {
    // query of db should select everything from the closet where the user_id is the same as the user id in the closet db
    // console.log( 'params', req.params );
    // console.log( 'query', req.query );
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

router.post( '/', (req, res) => {
    console.log( 'in POST /closet', req.body );
    const queryString = `INSERT INTO closet ( type, color, size, description, user_id ) VALUES ( $1, $2, $3, $4, $5 );`;
    const values = [req.body.type, req.body.color, req.body.size, req.body.description, req.body.user_id ];
    pool.query(queryString, values)
    .then(results => {
        console.log( 'added to closet', results );
        res.sendStatus(201);
    }).catch(( err ) => {
        console.log( 'error in POST /closet', err );
        res.sendStatus( 500 );
    })
})

router.put( '/', (req, res) => {
    console.log( 'in PUT /closet', req.body );
    const queryString = `UPDATE closet SET type = $1, color = $2, size = $3, description = $4 WHERE id = $5;`;
    const values = [req.body.type, req.body.color, req.body.size, req.body.description, req.body.id];
    pool.query(queryString, values)
    .then(results => {
        console.log( 'updated closet', results );
        res.sendStatus(201);
    }).catch((err => {
        console.log( 'error in PUT /closet', err );
        res.sendStatus(500);
    }))
})

router.delete( '/:id', (req, res) => {
    console.log('in the params',req.params);
    let queryString = `DELETE FROM closet WHERE id = $1;`;
    let values = [req.params.id];
    pool.query(queryString, values).then(results => {
        res.sendStatus( 201 );
    }).catch(result => {
        console.log(err)
        res.sendStatus(500);
    })
})

module.exports = router