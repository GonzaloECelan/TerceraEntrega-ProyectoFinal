const {userModel} = require('../models/schemas/user.model');
const {hashPassword,validPassword} = require('../utils/hash')
const {generateToken} = require('../utils/utils')
const {ENV_CONFIG} = require('../config/env.config');



class UserControllers {
    

    static registerRender = async(req,res,next)=>{
    try {
    
    return res.render('register')
    } catch (error) {
    next(error)
    }
    }

    static loginRender = async(req,res,next)=>{
        try {
            
            return res.render('login')
        } catch (error) {
            next(error)
        }
            }

    static registerUser = async(req,res,next)=>{
    
 
    try {
    
    


  } catch (error) {
    next(error)
  }
    }

static loginUser = async (req,res,next)=>{
    
    
    try {
      
      
    } catch (error) {
      next(error)
    }
}


}

module.exports = {UserControllers}