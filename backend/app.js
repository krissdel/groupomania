
global.imagePath = "img";
// require("dotenv").config();                //charge les variables d'environnement à partir d'un .env fichier dans process.env
const express    = require('express');
const helmet     = require ('helmet');     // aide à sécuriser l'applications Express en définissant divers en-têtes HTTP
const bodyParser = require('body-parser');
const path       = require('path');
const cors       = require('cors');   //Cross Origin Resource Sharing (accéde à notre API/ajoute les headers/envoie requêtes  GET,POST...)

const userRoutes  = require('./routes/user');
const postRoutes = require('./routes/post');




const app = express();
app.use(cors());

app.use(helmet());

app.use(bodyParser.json()); // Transforme le corps de la requête en un objet JSON

// app.use('app.router');
// routes.initialize(app);

// ----- [indique à Express qu'il faut gérer les images de manière statique]-------------------------------
app.use('/images', express.static(path.join(__dirname, global.imagePath))); 


//-----[route]---------------------------------------------------------------------------------------------

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes );


module.exports = app;
// module.exports = router;


