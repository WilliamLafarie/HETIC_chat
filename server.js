/*
    Import
*/
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');
    const bodyParser = require('body-parser');

    const frontRouter = require('./routes/front.routes')



/* 
Configuration
*/
    // Config. de base
    const server = express();
    const port = process.env.PORT;

    // Config du dossier client
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Config du moteur de rendu
    server.set( 'view engine', 'ejs' );

    // Config routes
    server.use( '/', frontRouter );
//



/*
    Execution
*/

    server.listen( port, () => {
        console.log(port);
    })
