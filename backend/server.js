const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Permite que seu site front-end acesse o back-end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Seu usuário do MySQL
    password: 'root',      // Sua senha do MySQL
    database: 'contatos'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota para receber os dados do formulário
app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;

    const query = 'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)';
    
    db.query(query, [nome, email, mensagem], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao salvar no banco de dados.' });
        }
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});