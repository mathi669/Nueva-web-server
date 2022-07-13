const express = require('express')
const app = express()

//navegacion entre paginas
app.get('/',  (req, res) => {
  res.send('Home page')
});

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola mundo desde su respectiva ruta')
});

//peticion get que muestra mensage de not found '*'
app.get('*',  (req, res)  => {
    res.send('404 | page not found')
});

app.listen(8080)