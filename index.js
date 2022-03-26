const express = require('express');
const { user } = require('./routes/index.js');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(user);

app.get('/', (request, response) => {
  response.send('Welcome to blogs API');
});
