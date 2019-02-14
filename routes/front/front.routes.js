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
            res.render('index');
        });    

        frontRouter.get('/chat', (req, res) => {
            res.render('chat');
        });       
    }
}
//

/* 
Export 
*/
module.exports = {FrontRouterClass};
//