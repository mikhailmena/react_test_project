const express = require('express');
const app = express();

const {Pool, Client} = require('pg'); 
////////client setup


////////////pool setup///////////////////////
const pool = new Pool(
    { user: 'postgres',
    password: 'docker',
    host: 'localhost',
    port: 5432,
    database: 'testdb1'
})
/////////////////////////////ROUTES///////////////////////

const port = 3002;

///////////////////SIMPLE METHODS////////////////////
// pool.query('SELECT * FROM testtable', (res,req) => {
//     console.log(req.rows)
//         })

///////////////////client READ////////////////////////////////////
// app.get('/allrows', (req, res) => {
//     client.query('SELECT * FROM testtable' ).then((data) => {
//         res.status(200)
//         res.send(data.rows);
//         })
//     })

// app.post('/push', (req, res) => {
//     let string = req.body
//     client.query(`INSERT INTO FROM testtable(id, name, title) VALUES(${string})`)
         
//     })
/////////////////pool READ //////////////////////////////////////////
app.get('/allrows', (req, res) => {
    
    pool.query('SELECT * FROM testtable' ).then(
        (data) => {
            res.send(data.rows)
        })
    })
// app.get('/other', (req, res) => {
//     let information = JSON.stringify(req.rows)
//     console.log(information)
//     console.log(req.rows)
//     res.send(req)
// })
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

// https://node-postgres.com/features/connecting