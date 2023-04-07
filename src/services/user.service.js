const {userDao} = require('../models/dao/mongo/user.mongo.dao.js')
const {hashPassword,validPassword} = require('../utils/hash.js')
const {ENV_CONFIG} = require('../config/env.config.js')
const {generateToken} = require('../utils/utils.js')




class userService {
    getUser  = async()=>{

        const user = await userDao.getUser();
        return user
    }
    getUserById  = async(id)=>{
        if(!id){
            throw new HttpError('Missing param', htpp_status.BAD_REQUEST)  
        }
        const userId = await userDao.getUserById(id)
        if(!userId){
            throw new HttpError('User not found', htpp_status.NOT_FOUND)  
        }
        return userId

    }
    userRegister  = async(payload)=>{
        const { firts_name, last_name, email, age , password} = payload;
        if (!firts_name || !email || !last_name || !password) {
        throw new HttpError('Missing fields', htpp_status.BAD_REQUEST);
        }
        const user = await userDao.getUser({email:email})
        if(user){
            console.log('este usuario ya existe')
        }

        const newUser = {
        firts_name,
        last_name,
        age,
        email,
        provider: null,
        password:hashPassword(password)
    }
    const userRegistered = await userDao.userRegister(newUser)
    return userRegistered

    }

    loginUser = async (payload)=>{
        const {email, password} = payload
        const adminEmail = ENV_CONFIG.ADMIN_EMAIL;
        const adminPassword = ENV_CONFIG.ADMIN_PASSWORD

        const user = await userDao.getUser({email:email})
        
        if(email === user.email && validPassword(user,password)){
            const generate_token = generateToken({email, role:'USER'})

        }



    }
    updateUser  = async(id, payload)=>{
        if (!id) {
            throw new HttpError('Missing param', htpp_status.BAD_REQUEST);
          }
          const { name, email } = payload;
          if (!name || !email) {
            throw new HttpError('Missing fields', htpp_status.BAD_REQUEST);
          }
          const updatePayload = {};
          payload.name && (updatePayload.name = payload.name);
          payload.email && (updatePayload.email = payload.email);
          const updatedUser = await usersDao.updateUser(id, updatePayload);
          return updatedUser;
    }
}

module.exports =  {userService}