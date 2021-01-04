const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({pagina: 'server is running on aws'});
});

app.listen(443);
