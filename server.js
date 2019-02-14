/*
    Import
*/
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');
    const bodyParser = require('body-parser');

    const { mainRouter } = require('./routes/main.routes');



/* 
Configuration
*/
    // Config. de base
    const server = express();
    const port = process.env.PORT;

    class ServerClass { 
        
        init() { 

            // Config du dossier client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            // Config du moteur de rendu
            server.set( 'view engine', 'ejs' );

            // Lancer le serveur
            this.launch();
        }

        launch() { 

            server.listen( port, () => {
                console.log(port);
            })
        }
    }

    

    // Config routes
    server.use( '/', mainRouter );
//



/*
    Execution
*/

new ServerClass().init();