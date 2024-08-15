
const Category = require('../models/Category')


exports.createCategory = async(req,res) => {
    try{
    const cat=await Category.create(req.body)
    res.status(201).json({
        success: true,
        category: cat
    })
    }catch(error)
    {
        res.status(400,json({
            success: false,
            error
        }))
    }
}

exports.getAllCategories = async(req,res) =>{
    try{
    const categories=await Category.find()
    res.status(200)
    console.log(categories.length)
    }catch(error)
    {
        res.status(400);
    }
}


//categories/:id

//categories/

exports.getSingleCategory = async(req,res)=>{
    try{
    const cat=await Category.findById(req.params.id)
    //req.params.id gives the value that is sent through the URL 
    // params is the parameter sent through the URL

    if(!cat){
        throw error;
    }

    res.status(200).json({
        success: true,
        category: cat
    })
}catch(error){
    res.status(404).json({
        success: false,
        message: "not ok"
    })
}
}

//delete function 

exports.deleteCategory =async(req,res)=>{
    try{
        const cat=await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Deleted",
            category: cat
        })
    }catch(error)
    {
        res.status(404).json({
            success: false,
            message: "not ok"
        })
    }
}

exports.updateCategory=async(req,res)=>{
    try{
        const cat=await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                runValidators: true,
                new: true
            }
           )
        res.status(200).json({
            success: true,
            message: "Deleted",
            category: cat
        })
    }catch(error)
    {
        res.status(400).json({
            success: false,
            message: "not ok"
        })
    }

}