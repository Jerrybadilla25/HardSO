const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('index')
});

router.get('/mobil/sofware/mapme', function(req, res){
    res.render('mobil/sofware/mapme')
});

router.get('/politica/politica', function(req, res){
    res.render('politica/politica')
});




module.exports =  router;