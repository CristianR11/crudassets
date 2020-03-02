const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const cors = require('cors');
var morgan = require('morgan');


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//app.use(express.static('../frontend/dist/frontend'));
// middlewares (Entendimiento de datos)
//Acciones necesarias antes de ir a rutes
app.use(express.json()); //Archivos .json
app.use(express.urlencoded({extended: false})); //Entiende datos de HTML
app.use(cors({origin: 'http://localhost:4200'}));



//rutas
// uso de lo exportado desde el archivo routers
app.use(require('./routes/index'));

app.listen(4000);
console.log('Servidor corriendo en el puerto 4000');