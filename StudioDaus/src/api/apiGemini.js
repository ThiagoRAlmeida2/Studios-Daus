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
    const response = await axios.post('https://api.gemini.com/analyze', {
      apiKey: process.env.GEMINI_API_KEY, // chave api
      siteUrl: url
    });
    console.log('Analise feita com sucesso');
    res.json(response.data);
  } catch (error) {
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
