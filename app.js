const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.connect(config.database);

//mongoose.connect('mongodb://localhost/myapp');

mongoose.connection.on('conectado', () => {
    console.log('Conectado ao Mongodb' + config.database);
});

mongoose.connection.on('Não Conectado', (err) => {
    console.log(' Não conectado ao Mongodb' + err);
});



const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    res.send('Fim Invalido');

});
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', users);


app.listen(port, () => {
    console.log('Servidor na porta :: ' + port)
});