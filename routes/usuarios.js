const express = require('express');
const router = express.Router();
const { register, todosUsuarios, login, editarUsuario, deleteUsuario } = require('../controllers/usuarioController');

router.post('/register', register);
router.post('/login', login);

router.get('/usuarios', todosUsuarios);
router.put('/usuarios/:id', editarUsuario);
router.delete('/usuarios/:id', deleteUsuario);

module.exports = router;
