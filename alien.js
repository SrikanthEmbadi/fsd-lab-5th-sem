const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    tech:{
        name:String,
        required:true
    },
    sub:{
        type:String,
        default:false
    }
})

module.exports = mongoose.Model('Alien',alienSchema)