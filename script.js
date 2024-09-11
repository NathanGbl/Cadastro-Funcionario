const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const cadastrarBtn = document.getElementById('cadastrar');
const logarBtn = document.getElementById('logar');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'funcionarios',
    password: 'fei',
    port: 5432,
});

app.use(express.json());

function verifyPhone(phoneNumber) {
  characters = [];
  for (let i = 0; i < phoneNumber.length; i++) {
    if (!characters.includes(phoneNumber[i])) {
      characters.append(phoneNumber[i]);
    }
  }
  return characters.length >= 5;
};

function verifyEmail(email) {
  characters = [];
  for (let i = 0; i < email.length; i++) {
    return (email[i] === '@' && characters.length != 0);
  };
};

function verifyEmployee(name, lastName, position, department, email, phone) {
  data = [name, lastName, position, department, email, phone]
    return (data.every(data => data != "") && verifyEmail(email) && verifyPhone(phone));
};

function verifyAdm(user, password) {
  data = [user, password];
  return (data.includes(data => data != ""))
}

function addEmployee() {
    app.post('/funcionarios', async (req, res) => {
        const { name, lastName, position, department, email, phone } = req.body; // Recebe o corpo da requisição (dados JSON)
        if (verifyEmployee(name, lastName, position, department, email, phone)) {
          try {
            // Consulta SQL para inserir um novo usuário na tabela
            const result = await pool.query(
              'INSERT INTO funcionario (Nome, SobreNome, Cargo, Departamento, Email, Telefone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
              [name, lastName, position, department, email, phone]
            );
            res.status(201).json(result.rows[0]); // Retorna o usuário recém-adicionado como resposta
          } catch (err) {
            console.error('Erro ao inserir usuário:', err.message);
            res.status(500).send('Erro no servidor');
          }
        } else {
          res.status(400).send('Dados incorretos');
        }
      });
};

function loginAdm() {
  app.post('/adms', async (req, res) => {
    const { usuario, senha } = req.body; // Recebe o corpo da requisição (dados JSON)
    if (verifyAdm(usuario, senha)) {
      try {
        // Consulta SQL para inserir um novo usuário na tabela
        const result = await pool.query(
          'SELECT * FROM Administradores WHERE Usuario = $1 AND Senha = $2',
          [usuario, senha]
        );
        res.status(201).json(result.rows[0]); // Retorna o usuário recém-adicionado como resposta
      } catch (err) {
        console.error('Erro ao inserir usuário:', err.message);
        res.status(500).send('Erro no servidor');
      }
    } else {
      res.status(400).send('Dados incorretos');
    }
  });
};

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


cadastrarBtn.addEventListener('click', addEmployee);