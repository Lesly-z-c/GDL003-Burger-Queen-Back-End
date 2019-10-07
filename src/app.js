// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'
 
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
 
// Llamamos a express para poder crear el servidor
var app = express();
 
// Aquí cargaremos la configuración de rutas posteriormente
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
  })

app.get('/mi-prueba', (req, res) => {
    return res.status(200).send({
       message: 'Método de prueba del API REST victorroblesweb.es'
    });
});
  
  app.get('/users/oscar/avatar', (req, res) => {
    res.send('Hello GET:/users/oscar/avatar')
  })
  
  app.put('/users/oscar/avatar', (req, res) => {
    res.send('Hello PUT:/users/oscar/avatar')
  })
  
  app.delete('/users/oscar', (req, res) => {
    res.send('Hello DELETE:/users/oscar')
  })
  
  app.post('/users', (req, res) => {
    res.send('Hello POST:/users')
  })

// Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 
// Aquí configuraremos el CORS posteriormente
 
// Aquí configuraremos rutas
 
// Por ultimo exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;