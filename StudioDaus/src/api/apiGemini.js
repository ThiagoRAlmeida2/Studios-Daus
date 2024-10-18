const express = require('express');
const axios = require('axios');

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
      apiKey: 'AlzaSyAHMRPORN4U9HjbDIDcj4MY-jY3-RJY8Z0', // chave api
      siteUrl: url
    });
    console.log('Analysis successful');
    res.json(response.data);
  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
