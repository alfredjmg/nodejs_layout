require("dotenv").config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var cookieSession = require('cookie-session');
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

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Import routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));


// App port
const PORT = process.env.PORT || 4000;
var host_value = process.cwd();
// Start app
var server = app.listen(PORT, 'localhost', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Web server started at http://${host}:${port}`);
});