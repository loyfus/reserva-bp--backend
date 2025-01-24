const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  idCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  idCorretor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  data: { type: Date, required: true },
  horaInicio: { type: String, required: true },
  horaFim: { type: String, required: true },
  status: { type: String, enum: ['ativo', 'cancelado'], default: 'ativo' }
}, { timestamps: true });

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;