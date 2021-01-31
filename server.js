const express = require('express');
const app = express();

const hbs = require('hbs'); // Defnicion para usar parciales de handlebars
require('./hbs/helpers'); // Ruta donde se definen los helpers. Define variables de mucho uso.


// Variables de entorno globales para subir a Heroku
const port = process.env.PORT || 3000; // en el servidor heroku recibirá un valor process.env.PORT. En local será 3000


app.use(express.static(__dirname + '/public')); // ruta de los html publicos


// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //Definimos la ruta de nuestros parciales se identifican por {{> }} en su llamada
app.set('view engine', 'hbs');  // Define como motor visualizador de Handlebars. Archivos .hbs. Los encuentra en views




app.get('/', (req, res) => { // Definimos que cualquier peticion de web renderiza el archivo views/home.hbs

    res.render('home', {
        nombre: 'Jose Luis' // Aqui le pasamos las variables con los valores que necesite en home.hbs {{nombre}}
    });
 
});

app.get('/about', (req, res) => { // Definimos peticion a /about de web renderiza el archivo views/about.hbs

    res.render('about'); // Este archivo renderizado está en /view/parciales
 
});


// app.get('/', function (req, res){ 
//     // Middleware Todas las funciones que entren por la url '/' ejecutan esta funcion
   
//     let salida = {
//         nombre: 'fernando',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida)

// });

    app.get('/pepito', function (req, res){ 
        // Middleware Todas las funciones que entren por la url '/' ejecutan esta funcion
        res.send('Hello World')


});

app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});