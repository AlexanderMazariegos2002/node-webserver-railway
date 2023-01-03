require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebar
app.set('view engine', 'hbs'); // reenderizar
hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Alexander Mazariegos',
    titulo: 'Curso de Node'
  });
});


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Alexander Mazariegos',
    titulo: 'Curso de Node'
  });
  });

  app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Alexander Mazariegos',
      titulo: 'Curso de Node'
    });
  });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })