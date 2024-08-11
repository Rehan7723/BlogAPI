const mongoose= require('mongoose')

//crating the schema
const categorySchema= mongoose.Schema({
    
    name: String,
    desc: String

}, {
    timestamps: true
})

//create a model using schema
//model is the table in the DB
const Category=mongoose.model('Category',categorySchema);

module.exports= Category;