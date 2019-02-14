/*
Imports 
*/

const express = require('express');
const authRouter = express.Router();
//

/* 
Config.
*/
class AuthRouterClass {

    constructor() {}

    init(){
        this.routes();
        return authRouter;
    }

    routes(){
        authRouter.get('/login', (req, res) => {
            res.render('login');
        }); 

        authRouter.get('/register', (req, res) => {
            res.render('register');
        }); 

    }
}
//

/* 
Export 
*/
module.exports = {AuthRouterClass};
//