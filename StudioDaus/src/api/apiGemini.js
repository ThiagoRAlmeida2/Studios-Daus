const { GoogleGenerativeAI } = require('@google/generative-ai');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = 3000;
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://127.0.0.1:3001' // domínio que faz a requisição
}));

const client = new GoogleGenerativeAI("AIzaSyB1CffCSHIyt9MSP4KXKk504OMq3E0aTyE"); // CASO NÃO FUNCIONE, CRIE UMA NOVA CHAVE DA API NESSA URL https://aistudio.google.com/apikey
const model = client.getGenerativeModel({model: "gemini-1.5-flash"});
const chat = model.startChat({ history: [] });

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

app.post('/analyze', async (req, res) =>{
  const { url } = req.body;
  console.log(`Analyzing site: ${url}`);

  if (!url || !isValidUrl(url)) {
    console.error('Invalid URL provided');
    return res.status(400).json({ error: 'Url Invalido' });
  }

  try {
    console.log('Enviando a análise para a API do Gemini');
    mensagem_padrao = `Por favor, analise o deisgn do site ${url} 
    e me retorne um resumo de como ele foi feito e melhorias para fazer.
    Escreva sem símbolos, aspas ou coisas do tipo.`;
    const response = await chat.sendMessage(mensagem_padrao);
    console.log('Analise feita com sucesso');
    res.json({
      message: response,
    });
  } catch (error) {
    console.log('Erro ao fazer a análise:', error.message);
    if (error.response) {
      // Erro de resposta da API do Gemini
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      // Nenhuma resposta da API
      res.status(503).json({ error: 'Não tem resposta da API Gemini' });
    } else {
      // Outro erro
      res.status(500).json({ error: 'Ocorreu um erro esperado' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});
