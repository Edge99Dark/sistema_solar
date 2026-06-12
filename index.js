const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'views/planetas')));
app.use(express.static(path.join(__dirname, 'views/img')));
app.use(express.static(path.join(__dirname, 'views/css')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/menu');
});

app.get('/menu', (req, res) => {
    res.render('planetas/menu');
});

app.get('/mercurio', (req, res) => {
    res.render('planetas/mercurio');
});

app.get('/venus', (req, res) => {
    res.render('planetas/venus');
});

app.get('/tierra', (req, res) => {
    res.render('planetas/tierra');
});

app.get('/marte', (req, res) => {
    res.render('planetas/marte');
});

app.get('/jupiter', (req, res) => {
    res.render('planetas/jupiter');
});

app.get('/saturno', (req, res) => {
    res.render('planetas/saturno');
});

app.get('/urano', (req, res) => {
    res.render('planetas/urano');
});

app.get('/neptuno', (req, res) => {
    res.render('planetas/neptuno');
});

app.get('/pluton', (req, res) => {
    res.render('planetas/pluton');
});

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});