const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
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
      // Erro de resposta da API do Gemini
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      // Nenhuma resposta da API
      res.status(503).json({ error: 'No response from the Gemini API' });
    } else {
      // Outro erro
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
