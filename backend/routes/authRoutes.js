const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Certifique-se de que o modelo User esteja em models/User.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Rota de Registro
app.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Verifica se o usuário já existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria um novo usuário
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role, // Incluindo o campo de papel
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});


// Rota de Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifica se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Senha inválida' });
        }

        // Gera um token JWT
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SESSION_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
});



module.exports = router;
