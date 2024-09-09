const express = require('express');
const { Pool } = require('pg');
const app = express();
const cadastrarBtn = document.getElementById('cadastrar');
const logarBtn = document.getElementById('logar');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'funcionarios',
    password: 'fei',
    port: 5432,
});

function verifyEmployee() {
    
};

function addEmployee() {
    app.post('/funcionarios', async (req, res) => {
        const { nome, sobreNome, cargo, departamento, email, telefone } = req.body; // Recebe o corpo da requisição (dados JSON)
      
        try {
          // Consulta SQL para inserir um novo usuário na tabela
          const result = await pool.query(
            'INSERT INTO usuarios (Nome, SobreNome, Cargo, Departamento, Email, Telefone) VALUES ($1, $2) RETURNING *',
            [nome, sobreNome, cargo, departamento, email, telefone]
          );
          res.status(201).json(result.rows[0]); // Retorna o usuário recém-adicionado como resposta
        } catch (err) {
          console.error('Erro ao inserir usuário:', err.message);
          res.status(500).send('Erro no servidor');
        }
      });
};

function loginAdm() {

};

app.use(express.json());

cadastrarBtn.addEventListener('click', addEmployee);