const {userModel} = require('../../schemas/user.model.js')


class userDao{

    getUser = async()=>{
   
   const user = await userModel.find().lean()
   return user
   
       }
   
   getUserById = async(id)=>{
   const user = await userModel.findOne({_id:id}).lean()
   return user
   }
   
   userRegister = async (payload) =>{
       const newUser = await userModel.create(payload)
       return newUser
   }
   
   updateUser = async (id,payload) =>{
       const updateUser = await userModel.findByIdAndUpdate(id,payload)
       return user
   }

   loginUser = async (email)=>{
    const user = await userModel.findOne({email:email}).lean()
    return user
   }
   }
   
   module.exports = {userDao}