const mongoose = require('mongoose');


const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String, unique:true, required:true},
    age:{type:Number},
    password:{type:String, required:true},
    rol:{type:String, enum:['USER','ADMIN'], default:'USER'},
    provider:{type:String}
})


const userModel = mongoose.model(userCollection,userSchema);

module.exports = {userModel};