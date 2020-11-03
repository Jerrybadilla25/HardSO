const express = require('express');
const router = express.Router();
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

// nodemailer
router.get('/contacto', (req, res)=>{
    res.render('partials/contact')
});


router.post('/contacto', (req, res)=>{
    const { name, email, titulo, text} = req.body;
    contentHTML = `
        <h1>Informacion de usuario</h1>
        <ul>
           <li>username: ${name}</li>
           <li>User Email: ${email}</li>
           <li>Titulo: ${titulo}</li>
        </ul>
        <p>${text}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'mail.hardsof.com',
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },

    });
   
    const mailOptions = {
        from: process.env.FROM,
        to: process.env.TOUSER,
        subject: titulo,
        html: contentHTML,
    };
   
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message);
        } else {
            console.log("email enviado");
            res.redirect('/');
        }

    });

});






//sitemaps
router.get('/sitemap.xml', function(req, res){
    const sitemap = fs.readFileSync('./src/sitemap.xml').toString('utf8');
    res.header('Content-Type', 'application/xml');
    res.send(sitemap)
});

//robots
router.get('/robots.txt', function(req, res){
    const robots = fs.readFileSync('./src/robots.txt').toString('utf8');
    res.header('Content-Type', 'application/txt');
    res.send(robots)
});



//rutas mobil
router.get('/', function(req, res){
    res.render('index');
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