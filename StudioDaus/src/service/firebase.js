// Importa e inicializa o Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js';


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function salvarDados(email, link, respostaIA) {
    const usuariosRef = ref(database, 'usuarios'); // Referência à coleção "usuarios"

    const novoUsuario = {
        email: email,
        link: link,
        respostaIA: respostaIA || "" 
    };

    push(usuariosRef, novoUsuario)
        .then(() => {
            console.log("Novo usuário adicionado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao adicionar novo usuário:", error);
        });
}

export { salvarDados };

// função para enviar a URL para a API que você criou e exibir a resposta no campo "Relatório do site" 
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importa o cors
require('dotenv').config();

app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json());

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

app.post('/analyze', async (req, res) => {
  const { url } = req.body;
  console.log(`Analyzing site: ${url}`);

  if (!url || !isValidUrl(url)) {
    console.error('Invalid URL provided');
    return res.status(400).json({ error: 'Invalid URL provided' });
  }

  try {
    const response = await axios.post('https://api.gemini.com/analyze', {
      apiKey: process.env.GEMINI_API_KEY, // chave api
      siteUrl: url
    });
    console.log('Analysis successful');
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      res.status(503).json({ error: 'No response from the Gemini API' });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));