const { productDao} = require('../models/dao/mongo/product.mongo.dao.js')
const {getDAO} = require('../models/dao/mongo/index.js')


const {productsDao} = getDAO()

class productService {

getProducts = async() =>{
    const products = await productsDao.getAll()
    return products
}

getProductById = async(id)=>{
if()
}










}

module.exports = {productService}