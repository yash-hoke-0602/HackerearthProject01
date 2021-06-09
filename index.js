const express = require('express');
const path = require('path');
const app = express();

// setting views
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//setting static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/js', express.static(__dirname + 'public/js'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/getCoordinates', (req, res) => {
    res.render('getCoordinates');
});

const PORT = 3333;
app.listen(PORT, () => console.log('Listening on 3333'));
