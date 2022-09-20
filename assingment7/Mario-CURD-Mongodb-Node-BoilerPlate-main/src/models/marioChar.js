const mongoose = require('mongoose');

//  Your code goes here
const Schema = mongoose.Schema;
const useSchema=new Schema({
    name:{type:String,required:true},
    weight:{type:Number,required:true}
})
const marioModel=mongoose.model("blogs",useSchema)


module.exports = marioModel;