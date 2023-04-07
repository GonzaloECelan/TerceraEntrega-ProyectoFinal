const {productModel} = require('../models/schemas/product.model')

class ProductControllers {
    
static getAll = async (req, res, next)=>{
    const limit = req.query.limit;
    try {
        if(!limit){
            
            const response = await productModel.find().lean().sort({price:1}).limit(10);
            const data = {
                title: "Productos",
                product:response
            }
            res.render('productos',data);
        }else{
            const response = await productModel.find().lean().limit(parseFloat(limit));
            const data = {
                title: "Productos",
                product:response
            }
            res.render('productos',data);
        }
 
        // res.status(200).send({result:'success', products: response})

    } catch (error) {
        next(error)
    }
}

static getById = async (req, res, next) =>{
    const productId = req.params.id;
    try {
        const response = await productModel.find({_id:productId});
        res.status(200).send({result:'success', ProductId: response})
    } catch (error) {
        next(error)
    }
}

static createProduct = async (req,res,next)=>{
    const createProduct = req.body
    try {
        const response = await productModel.create(createProduct)
        res.status(200).send({result:'success', addProduct: response})
    } catch (error) {
        next(error)
    }
}

static upDateProduct = async (req,res,next) =>{
    const updateId = req.params.id;
    const updateProduct = req.body;

    try {
        const response = await productModel.findByIdAndUpdate(updateId,updateProduct,{new:true});
        res.status(200).send({result:'success', update: response})
    } catch (error) {
        next(error)
    }
}

static deleteProduct = async (req,res,next)=>{
    const deleteId = req.params.id;
    try {
        const response = await productModel.findByIdAndDelete(deleteId);
        res.status(200).send({result:'success', productDelete: response})
    } catch (error) {
        next(error)
    }
}

}

module.exports = {
    ProductControllers
}