const { productDao} = require('../../dao/mongo/product.mongo.dao.js')



const productsDao = new productDao()

const getDAO = ()=>{
    return {
        
        productsDao
    }
}

module.exports =  {getDAO}