const express = require('express');
const coinRoute = require('./routes/coin'); 
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 4007;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use('/coin', coinRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Todo chido - Maria Fernanda Tamayo');
});

app.get('/users', (req,res) => {
res.send('Bienvenido a la lista de usuarios');
});


app.get('/*', (req, res) => {
    res.send('Bienvenido a mi Api :)');
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});