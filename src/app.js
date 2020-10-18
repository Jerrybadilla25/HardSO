const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const fs = require('fs');
const https = require('https');




https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/www.hardsof.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/www.hardsof.com/privkey.pem')
},app).listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});



// setting
app.set('port', process.env.PORT || 4200);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//importando rutas
const indexRouter = require('./routes/routes');
const { urlencoded } = require('express');


//middlewear
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//rutas
app.use('/', indexRouter);



/*app.listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});*/