const express = require('express');
const router = express.Router();
const fs = require('fs');



//sitemaps
router.get('/sitemap.xml', function(req, res){
    const sitemap = fs.readFileSync('./src/sitemap.xml').toString('utf8');
    res.header('Content-Type', 'application/xml');
    res.send(sitemap)
});

//robots
router.get('/robots.txt', function(req, res){
    const robots = fs.readFileSync('./src/robots.txt').toString('utf8');
    res.send(robots)
});



//rutas mobil
router.get('/', function(req, res){
    res.render('index')
});

router.get('/mobil/sofware/mapme', function(req, res){
    res.render('mobil/sofware/mapme')
});

router.get('/mobil/hardware/smartGM', function(req, res){
    res.render('mobil/hardware/smartGM')
});



//ruta windows

//rutas linux

//hardware

router.get('/hardware/ssd', function(req, res){
    res.render('hardware/ssd')
});

router.get('/hardware/ram', function(req, res){
    res.render('hardware/ram')
});



//rutas varias
router.get('/politica/politica', function(req, res){
    res.render('politica/politica')
});








module.exports =  router;