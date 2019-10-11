'use strict'
 
// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
 
// Usaremos los esquemas
var Schema = mongoose.Schema;
 
// Creamos el objeto del esquema
var orderSchema = Schema({
    order: Integer,
    quantity: Number,
    name: String,

});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Orders', OrderSchema);
