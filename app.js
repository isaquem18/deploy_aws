const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({pagina: 'server is running on aws'});
});

app.listen(port, () => console.log('server started'));
