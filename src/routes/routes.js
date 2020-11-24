const express = require('express');
const router = express.Router();
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Comentario = require('../modal/comentario');



// nodemailer
router.get('/politica/contacto', (req, res)=>{
    res.render('partials/contact')
});


router.post('/politica/contacto', (req, res)=>{
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


// delete comentarios
router.get('/delete/:id/:idComentario' , async(req, res)=>{
    const comentario = await Comentario.findById(req.params.idComentario);
    comentario.comentarios.pull(req.params.id);
    await Comentario.updateOne({_id:req.params.idComentario},comentario);
    res.redirect('/politica/ruta/add');
  });





//rutas mobil
router.get('/', function(req, res){
    const page = "/";
    res.render('index',{
        page
    });
});

router.get('/mobil/sofware/mapme',async function(req, res){
    const id = "5fae21b8263bcb30c414e3aa";
    const page = "/mobil/sofware/mapme";
    const coment = await Comentario.findById(id);
    res.render('mobil/sofware/mapme',{
        page, coment, id
    })
});

router.get('/mobil/hardware/smartGM', async function(req, res){
    const id = "5fae2223063aa71df8c93d41";
    const page = "/mobil/hardware/smartGM";
    const coment = await Comentario.findById(id);
    res.render('mobil/hardware/smartGM',{
        page, coment, id
    })
});

router.get('/mobil/sofware/mega', async function(req, res){
    const id = "5fb86c24f7e50b3c1cc7a59c";
    const page = "/mobil/sofware/mega";
    const coment = await Comentario.findById(id);
    res.render('mobil/sofware/mega',{
        page, coment, id
    })
});



//ruta windows

router.get('/windows/sofware/crear_usuario_invitado_windows', async(req, res)=>{
    const id = "5fae2260edc9b80db8d3e6f5";
    const page = "/windows/sofware/crear_usuario_invitado_windows";
    const coment = await Comentario.findById(id);
    res.render('windows/sofware/user-invitado',{
        page, coment, id
    })
});

router.get('/windows/sofware/one_drive', async(req, res)=>{
    const id = "5fb41481e9bf3b0fb4a31f3e";
    const page = "/windows/sofware/one_drive";
    const coment = await Comentario.findById(id);
    res.render('windows/sofware/onedrive',{
        page, coment, id
    })
});

router.get('/windows/sofware/one_drive_android', async(req, res)=>{
    const id = "5fb41481e9bf3b0fb4a31f3e";
    const page = "/windows/sofware/one_drive_android";
    const coment = await Comentario.findById(id);
    res.render('windows/sofware/onedriveAnd',{
        page, coment, id
    })
});

router.get('/windows/sofware/one_drive_win10', async(req, res)=>{
    const id = "5fb41481e9bf3b0fb4a31f3e";
    const page = "/windows/sofware/one_drive_win10";
    const coment = await Comentario.findById(id);
    res.render('windows/sofware/onedriveWin10',{
        page, coment, id
    })
});




//rutas linux










//hardware

router.get('/hardware/ssd', async function(req, res){
    const id = "5fae2193c98f263aa4e090f8";
    const page = "/hardware/ssd";
    const coment = await Comentario.findById(id);
    res.render('hardware/ssd',{
        page, coment, id
    })
});

router.get('/hardware/ram', async function(req, res){
    const id = "5fae1f9a9a3b0e06907b73d6";
    const page = "/hardware/ram";
    const coment = await Comentario.findById(id);
    res.render('hardware/ram',{
        page, coment, id
    })
});

router.get('/hardware/disco_duro', async function(req, res){
    const id = "5fae21f1061c4018d006cfde";
    const page = "/hardware/disco_duro";
    const coment = await Comentario.findById(id);
    res.render('hardware/discos_duros',{
        page, coment, id
    })
});












//rutas varias
router.get('/politica/politica', function(req, res){
    res.render('politica/politica')
});

/*pintar las rutas en rutas
router.get('/politica/ruta/add', async function(req, res){
    const task = await Comentario.find();
    res.render('addrutaComen',{
        task
    })
});

router.post('/politica/add/ruta', async(req, res)=>{
    const task= new Comentario(req.body);
    await task.save();
    res.redirect('/politica/ruta/add');
});

*/

router.get('/*', function(req,res){
    res.render('notfound')
});









module.exports =  router;