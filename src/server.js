const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser')






const appRoutProduct = require('../src/routes/products/product.routes');
const appRoutUser = require('./routes/user/app.user.routes')
const {ENV_CONFIG} = require('../src/config/env.config')




const app = express();

const PORT = ENV_CONFIG.PORT;
const SECRET_KEY = ENV_CONFIG.SECRET_KEY
const conexionMongoDB = require('./config/db.config');

// middlewares

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(ENV_CONFIG.SECRET_KEY));







app.use('/api',appRoutProduct);
app.use('/api',appRoutUser)




const server = app.listen(PORT, ()=>{
    console.log('Server is up and running in port 8080')
});
