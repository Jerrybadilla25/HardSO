const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const https = require('https');
const fs = require('fs');


const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert','privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert','fullchain.pem'))
};



  https.createServer(options,app).listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});



/*
https.createServer({
    cert: fs.readFileSync(path.join(__dirname, 'cert','cert.pem')),
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem'))
},app).listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});
*/


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


/*
app.listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});
*/