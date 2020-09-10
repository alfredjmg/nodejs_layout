const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crear proyectos
// api/proyectos
router.post('/',
    auth,
    proyectoController.crearProyecto
);

// Obtener todos los proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

// Actualizar proyectos via ID
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto obligatorio').not().isEmpty(),
    ],
    proyectoController.actualizarProyecto
);

// Eliminar proyectos via ID
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;