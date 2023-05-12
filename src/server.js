const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser')
const {ENV_CONFIG} = require('../src/config/env.config')
const {addLogger} = require('../src/utils/loggers.js')




const appRoutProduct = require('../src/routes/products/app.products.routes.js');
const appRoutCart = require('../src/routes/cart/app.cart.routes.js')
const appRoutUser = require('./routes/user/app.user.routes')



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
app.use(cookieParser(SECRET_KEY));
app.use(addLogger)



// routes

app.use('/api',appRoutProduct);
app.use('/api',appRoutUser)
app.use('/api', appRoutCart)

// app.get('/',(req,res)=>{
//     req.logger.warning('alerta')
//     res.send({message:"Prueba de logger"})
// })



const server = app.listen(PORT, ()=>{
    console.log('Server is up and running in port 8080')
});
