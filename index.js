const express = require ('express');
const app = express();
const morgan = require ('morgan');
require('../settings/database');

//Configuraciones
app.set('port', process.env.PORT ||4500);
app.set('json spaces', 2);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Configuracion de Rutas
app.use(require('./routes/home'));
app.use('/api/login', require('./routes/login'));
app.use('/api/consulta', require('./routes/register'));
app.use('/api/newregister', require ('./routes/register'));

app.listen (app.get('port'), ()=>{
   console.log(`Servidor en puerto ${app.get('port')}`);
});
