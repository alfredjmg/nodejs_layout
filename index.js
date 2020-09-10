const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var cookieSession = require('cookie-session')
const conectarDB = require('./config/db');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use( express.json({ extended: true }));

// COOKIE SESSION
const cookie = { 
    name: 'session',
    keys: [
        'Key1',
        'Key2'
    ]
};
app.use(cookieSession(cookie)); 
// COOKIE SESSION

// Puerto de la app
const PORT = process.env.PORT || 4000;

//documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});