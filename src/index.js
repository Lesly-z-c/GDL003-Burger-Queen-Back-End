const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');  // Cargamos el módulo de mongoose para poder conectarnos a MongoDB
//const port = 3000;  //Indica el puerto en el que va a funcionar el servidor 

//Settings     //Ajustes
app.set('port', process.env.PORT || 3000);
app.set ('json spaces', 2);

const dbConfig = require('./config/config-database.js'); // Configuramos la base de datos

//Middlewares     // Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route  //Rutas
require('./routes/menu-routes.js')(app);
//app.use(require('./routes/menu-routes.js'));

mongoose.Promise = global.Promise;

// Connecting to the database //Conectando a la base de datos
mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect('mongodb://localhost:27017/menuSpace', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Successfully connected to the database");    


})
.catch(err => {
    console.log('Could not connect to the database. Now...', err);
  //  process.exit();
});


//Starting the server  //Crear el servidor Web Nodejs
app.listen(app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}!`))





/*'use strict' // Utilizar nuevas funcionalidades del Ecmascript 6
 
var mongoose = require('mongoose');  // Cargamos el módulo de mongoose para poder conectarnos a MongoDB

mongoose.Promise = global.Promise;  // Le indicamos a Mongoose que haremos la conexión con Promesas
 
var app = require('./app'); // Cargamos el fichero app.js con la configuración de Express
var port = 3800;  //Indica el puerto en el que va a funcionar el servidor 

// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/mi_database_mongo', {useNewUrlParser: true}, {useUnifiedTopology: true} )
  .then(() => {    
      console.log('La conexión a MongoDB se ha realizado correctamente!!'); // Conexión realizada
      // CREAR EL SERVIDOR WEB CON NODEJS
      app.listen(port, () => {
          console.log('El servidor esta corriendo en localhost:3800');
          });
      })
  .catch(err => console.log(err)); // Si no se conecta correctamente muestra el error
        

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/
/*----------------------------------------------
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const port = 3000;*/

// Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
/*app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 */
// Aquí configuraremos el CORS posteriormente
 
// Aquí configuraremos rutas
/*app.get('/', (req, res) => {
  res.json({"message": "Saludos desde express"});
});
*/
// Le indicamos a Mongoose que haremos la conexión con Promesas
//mongoose.Promise = global.Promise;
 
// Usamos el método connect para conectarnos a nuestra base de datos
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
/*mongoose.connect('mongodb://localhost:27017/mi_database_mongo', {useMongoClient: true})
        .then(() => {
 
                // Cuando se realiza la conexión, lanzamos este mensaje por consola
            console.log('La conexión a MongoDB se ha realizado correctamente!!');
        })
        .catch(err => console.log(err));
        // Si no se conecta correctamente escupimos el error


const formulario = '<form method="post" action="/saludo">'
    + '<label for="nombre">¿Cómo te llamas?</label>'
    + '<input type="text" name="nombre" id="nombre">'	
    + '<input type="submit" value="Enviar"/>'
    + '</form>';
 
const cabecera = '<h1>Saludo</h1>';
 
app.get('/saludo', (req, res) => {
 
	res.send('<html><body>'
			+ cabecera
			+ formulario
			+ '</html></body>'
	);
 
});

app.post('/saludo', (req, res) => {
 
	const nombre = req.body.nombre || '';
	let saludo = '';
 
	if (nombre != '')
		saludo = "Hola " + nombre;
 
	res.send('<html><body>'
			+ cabecera
			+ '<p>' + saludo + '</p>'
			+ formulario
			+ '</html></body>'
	);
 
});*/

/*app.get('/', (req, res) => {
  res.send('Saludos desde express');
});

app.post('/hola', (req, res) => {
  res.send('[POST]Saludos desde express');
});

app.get('/hola', (req, res) => {
  res.send('[GET]Saludos desde express');
});

app.get('/BurgerSpace/menu', (req, res) =>
    res.send('desayuno, comidas'))

app.get('/BurgerSpace/products', (req, res) => 
    res.send('Hello World! hamburguesa, papas y bebidas'))

app.get('/BurgerSpace/menuspace', (req, res) =>
    res.json({
        "mesa": "1",
        "mesero": "Pancho",

        "menu": {
          "food": "hamburguesa",
          "drinks": "cola"
          }
        }))
app.get('/BurgerSpace/count/:mesa', (req, res) => {
    //console.log('and this matches too' + req.params.id)
    //console.log(`and this match  es too ${req.params.id}`)
    //res.end()
    res.end(
      `<h1> Orden numero: ${req.params.mesa}<h1>`)
    })

//Parametros
app.param('id', (req, res, next, id) => {
  console.log('CALLED ONLY ONCE')
  next()
})

app.get('/user/:id', (req, res, next) => {
  console.log('although this matches')
  next()
})

app.get('/user/:id', (req, res)  => {
  console.log('and this matches too')
  res.end()
})

app.post('/home', (req, res) => res.send('Got a POST request'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/