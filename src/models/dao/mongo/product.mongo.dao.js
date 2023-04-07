const {productModel} = require('../../../models/schemas/product.model')

class productDao {
    constructor(){

    }

    getAll = async()=>{
       
            const products = await productModel.find().lean()
            return products
        

    }

    getById = async (id)=>{
       
            const productId = await productModel.findById({_id:id}).lean()
            return productId
       
    }

    createProduct = async (product)=>{

            const createProduct = await productModel.create(product);
            return createProduct
            
       

    }

    updateProduct = async (id, product)=>{

    const updateProduct = await productModel.findByIdAndUpdate(id,product,{new:true})
    return updateProduct

    }

    deleteProduct = async (id)=>{

        const deleteProduct = await productModel.findByIdAndDelete()
        return deleteProduct
    
        }

    }

    



module.exports = {
    productDao
}