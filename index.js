const express = require('express');
const { user, category, post } = require('./routes/index.js');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(user);
app.use('/categories', category);
app.use('/post', post);

app.get('/', (request, response) => {
  response.send('Welcome to blogs API');
});
