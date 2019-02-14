// Configuration du module
let express = require('express');
let frontRouter = express.Router();


// Configuration de la route => http://localhost:8080/
frontRouter.get('/', (req, res) => {

    // Renvoyer la réponse la vue html
    res.render('index', {title: "Salut", subTitle: "Bienvenue sur mon blog"});

});

// Export du module
module.exports = frontRouter; 