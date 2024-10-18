const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.post('https://api.gemini.com/analyze', {
        apiKey: 'AlzaSyAHMRPORN4U9HjbDIDcj4MY-jY3-RJY8Z0', // chave api
        siteUrl: url
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
