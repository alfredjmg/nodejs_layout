// Rutas para autenticar usuario
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

router.post('/sign-up',
    authController.signUp
);

// router.post('/sign-up/activate/:token',
//     authController.autenticarUsuario
// );

// router.post('/resend-email',
//     authController.autenticarUsuario
// );

router.post('/log-in',
    authController.logIn
);

router.post('/log-out',
    authController.logOut
);

module.exports = router;