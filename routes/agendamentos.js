const express = require('express');
const router = express.Router();
const { criarAgendamento, alterarAgendamento, listarAgendamentos } = require('../controllers/agendamentoController');

router.post('/create', criarAgendamento);
router.put('/:idAgendamento', alterarAgendamento);
router.get('/list', listarAgendamentos);

module.exports = router;