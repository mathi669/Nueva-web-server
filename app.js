require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//middleware
// Servir contenido estatico
app.use( express.static('public') );


//navegacion entre paginas
// app.get('/',  (req, res) => {
//   res.send('Home page');
// });
app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Matias',
        titulo: 'Curso de node'
    });
});

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'generic',
        titulo: 'Pagina '
    });
});

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'elements',
        titulo: 'Pagina '
    });
});

//peticion get que muestra mensage de not found '*'
app.get('*',  (req, res)  => {
    res.sendFile(__dirname +'/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});