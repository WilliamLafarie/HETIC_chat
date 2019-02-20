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
        authRouter.post('/login', (req, res) => {
            res.json('login');
            
        }); 

        authRouter.post('/register', (req, res) => {
            res.json('register');
        }); 

    }
}
//

/* 
Export 
*/
module.exports = {AuthRouterClass};
//