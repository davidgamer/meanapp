const express = require('express');
const router = express.Router();




//registrar


router.get('/registro',(req,res,next)=>{

res.send('Registro');


});


module.exports = router;