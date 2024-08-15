const express = require('express')

const router=express.Router()
// const categoryController=require('../controllers/categories')

const {getAllCategories,
     createCategory,
     getSingleCategory,
     deleteCategory,
     updateCategory

} = require('../controllers/categories')


router.get("/", getAllCategories)
router.post('/',createCategory)

router.get("/:id",getSingleCategory)
router.delete('/:id',deleteCategory)
router.put('/:id',updateCategory)

module.exports= router