# Backend da Reserva BP

Este é o backend para o sistema de agendamentos da Reserva BP. Ele foi desenvolvido utilizando Node.js, Express e MongoDB, e oferece funcionalidades para gerenciar usuários e agendamentos.

## Funcionalidades

- **Autenticação de Usuários**: Registro e login de usuários com geração de token JWT.
- **Gerenciamento de Usuários**: Listagem, edição e exclusão de usuários.
- **Agendamentos**: Criação, alteração e listagem de agendamentos.
- **Validação de Horários**: Verificação de conflitos de horários para evitar agendamentos sobrepostos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: Biblioteca para modelagem de dados do MongoDB.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização de usuários.
- **Bcrypt**: Para criptografia de senhas.
- **CORS**: Para permitir requisições de diferentes origens.

## Estrutura do Projeto

- **`server.js`**: Ponto de entrada da aplicação, configura o servidor e as rotas.
- **`config/db.js`**: Configuração da conexão com o MongoDB.
- **`models/`**: Contém os modelos de dados (Agendamento e Usuario).
- **`controllers/`**: Lógica de negócio para manipulação de usuários e agendamentos.
- **`routes/`**: Definição das rotas da API.
- **`middleware/auth.js`**: Middleware para autenticação de rotas protegidas.

## Rotas da API

### Usuários

- **POST /usuario/register**: Registra um novo usuário.
- **POST /usuario/login**: Realiza o login e retorna um token JWT.
- **GET /usuario/usuarios**: Lista todos os usuários.
- **PUT /usuario/usuarios/:id**: Atualiza um usuário existente.
- **DELETE /usuario/usuarios/:id**: Exclui um usuário.

### Agendamentos

- **POST /agendamento/create**: Cria um novo agendamento.
- **PUT /agendamento/:idAgendamento**: Atualiza o status de um agendamento.
- **GET /agendamento/list**: Lista todos os agendamentos ativos.
