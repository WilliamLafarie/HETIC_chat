/*
Imports 
*/

// NodeJS
const {Router} = require('express');
const mainRouter = Router({ mergeParams: true });

// Inner
const {FrontRouterClass}  = require('./front/front.routes');
const {AuthRouterClass}  = require('./auth/auth.routes');





// FrontRouteur
const frontRouter = new FrontRouterClass();
const authRouter = new AuthRouterClass();
mainRouter.use('/api', authRouter.init());
mainRouter.use('/', frontRouter.init());


/* 
Export 
*/
module.exports = mainRouter;