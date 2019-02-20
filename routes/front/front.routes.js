/*
Imports 
*/

const express = require('express');
const frontRouter = express.Router();
//

/* 
Config.
*/
class FrontRouterClass {

    constructor() {}

    init(){
        this.routes();
        return frontRouter;
    }

    routes(){
        frontRouter.get('/', (req, res) => {
            res.render('index', { connected: false});
        });
        
        frontRouter.get('/login', (req, res) => {
            res.render('login', { connected: false});
        });

        frontRouter.get('/register', (req, res) => {
            res.render('register', { connected: false});
        });

        frontRouter.get('/chat', (req, res) => {
            res.render('chat', { connected: false});
        });       
    }
}
//

/* 
Export 
*/
module.exports = {FrontRouterClass};
//