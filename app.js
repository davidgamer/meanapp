const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require ('cors');
const passport = require('passport');
const mongoose = require ('mongoose');

const app = express();
const users = require('./routes/users');
const port = 8000;
app.use(cors());
app.get('/',(req,res)=>{

res.send('Fim Invalido');

});
app.use(bodyParser.json);
app.use('/users',users);


app.listen(port, () => {
    console.log('Servidor na porta :: '+ port)
});