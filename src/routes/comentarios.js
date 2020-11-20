const express = require('express');
const router = express.Router();
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Comentario = require('../modal/comentario');



/*
router.post('/politica/add/ruta', async(req, res)=>{
    const task= new Comentario(req.body);
    await task.save();
    res.redirect('/politica/ruta/add');
});
*/

router.post('/hardware/ssd', async function(req, res){
    const id = "5fae2193c98f263aa4e090f8";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/hardware/ssd');
});

router.post('/windows/sofware/crear_usuario_invitado_windows', async function(req, res){
    const id = "5fae2260edc9b80db8d3e6f5";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/windows/sofware/crear_usuario_invitado_windows');
});

router.post('/mobil/sofware/mapme', async function(req, res){
    const id = "5fae21b8263bcb30c414e3aa";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/mobil/sofware/mapme');
});

router.post('/mobil/hardware/smartGM', async function(req, res){
    const id = "5fae2223063aa71df8c93d41";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/mobil/hardware/smartGM');
});

router.post('/hardware/ram', async function(req, res){
    const id = "5fae1f9a9a3b0e06907b73d6";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/hardware/ram');
});

router.post('/hardware/disco_duro', async function(req, res){
    const id = "5fae21f1061c4018d006cfde";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/hardware/disco_duro');
});


router.post('/windows/sofware/one_drive_android', async function(req, res){
    const id = "5fb41481e9bf3b0fb4a31f3e";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/windows/sofware/one_drive_android');
});

router.post('/windows/sofware/one_drive_win10', async function(req, res){
    const id = "5fb41481e9bf3b0fb4a31f3e";
    const data = req.body;
    const task = await Comentario.findById(id);
    task.comentarios.push(data);
    await task.save();
    res.redirect('/windows/sofware/one_drive_win10');
});



module.exports =  router;