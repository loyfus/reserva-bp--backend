const Agendamento = require('../models/Agendamento');
const Usuario = require('../models/Usuario');

const criarAgendamento = async (req, res) => {
  const { idCliente, idCorretor, data, horaInicio, horaFim } = req.body;

  try {
    const cliente = await Usuario.findById(idCliente);
    const corretor = await Usuario.findById(idCorretor);

    if (!cliente || cliente.tipo !== 'Cliente' || !corretor || corretor.tipo !== 'Corretor') {
      return res.status(400).json({ message: 'Usuário inválido' });
    }

    const conflito = await Agendamento.find({
      idCorretor,
      data,
      $or: [
        { horaInicio: { $lt: horaFim, $gte: horaInicio } },
        { horaFim: { $gt: horaInicio, $lte: horaFim } },
        { horaInicio: { $lte: horaInicio }, horaFim: { $gte: horaFim } }
      ],
    });

    if (conflito.length > 0) {
      return res.status(400).json({ message: 'Este horário está ocupado' });
    }

    const novoAgendamento = new Agendamento({
      idCliente,
      idCorretor,
      data,
      horaInicio,
      horaFim,
    });

    await novoAgendamento.save();
    res.status(201).json({ message: 'Agendamento criado com sucesso', agendamento: novoAgendamento });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar agendamento', error: error.message });
  }
};

const alterarAgendamento = async (req, res) => {
    const { idAgendamento } = req.params;
    const { status } = req.body;
  
    try {
      const agendamento = await Agendamento.findById(idAgendamento);
      if (!agendamento) {
        return res.status(404).json({ message: 'Agendamento não encontrado' });
      }
  
      agendamento.status = status || agendamento.status;
  
      await agendamento.save();
      res.status(200).json({ message: 'Agendamento atualizado com sucesso', agendamento });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar agendamento', error: error.message });
    }
};

const listarAgendamentos = async (req, res) => {
    try {
      const agendamentos = await Agendamento.find({ status: 'ativo' })
        .populate('idCliente', 'nome email')
        .populate('idCorretor', 'nome email');
      res.status(200).json(agendamentos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao listar agendamentos', error: error.message });
    }
};

module.exports = { criarAgendamento, alterarAgendamento, listarAgendamentos };