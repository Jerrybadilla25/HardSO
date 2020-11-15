const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');


require('dotenv').config();


//conectando con mongo

const uri = process.env.MONGO;
mongoose.connect(uri, {
     useNewUrlParser: true ,
     useUnifiedTopology: true
});

mongoose.connection.on('open', _ => {
    console.log('database is connect to', uri);
});

mongoose.connection.on('error', err =>{
    console.log(err);
});




// setting
app.set('port', process.env.PORT || 4200);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// nodemailer


//importando rutas
const indexRouter = require('./routes/routes');
const ComentarioRouter = require('./routes/comentarios');
const { urlencoded } = require('express');


//middlewear
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


//rutas
app.use('/', indexRouter);
app.use('/', ComentarioRouter);





app.listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});
